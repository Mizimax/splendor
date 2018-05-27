process.env.TZ = "Asia/Bangkok";

const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("socket.io-cookie-parser");
const sharedsession = require("express-socket.io-session");
const session = require("express-session")({
  secret: "splendor",
  cookie: { maxAge: 60 * 60 * 24 * 365 }
});

// Listening on server
const port = 8888;
const server = app.listen(port);
const io = require("socket.io").listen(server);

const db = require("./mysql").connect();
const auth = require("./auth.js").auth;
const chat = require("./chat.js").chat;
//const user = require("./user.js");
const io_connect = require("./io.connect.js");



auth(io);

io.on("connection", async function(socket) {
  let numUsers = 0;
  numUsers++;
  console.log("Total users : " + numUsers);

  socket.on("AUTH_ATTEMPT", async function(data) {
    let resCookieAuth = [];
    if (socket.handshake.session.userdata) {
      [resCookieAuth] = await db.query(
        "SELECT * FROM user WHERE RememberToken = ?",
        [socket.handshake.sessionID]
      );
      if (resCookieAuth.length != 0) {
        socket.emit("AUTH", {
          status: "success",
          message: "Authentication Success"
        });
      }
    } else {
      socket.emit("AUTH", {
        status: "error",
        message: "Authentication Error"
      });
    }
  });

  chat(socket);

  socket.on("disconnect", function() {
    numUsers--;
    console.log("Total users : " + numUsers);
  });
});

app.use(cors());
app.use(session);
app.use(express.static(__dirname + "/../web"));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.post("/login", async function(req, res) {
  let data = req.body;
  let [results] = await db.query("SELECT * FROM users WHERE UserName = ?", [
    data.username
  ]);
  if (results.length === 1) {
    let response = results[0];
    let resEncrypt = await bcrypt.compare(data.password, response.UserPassword);
    if (resEncrypt) {
      if (!req.session.userdata) req.session.userdata = {};
      req.session.userdata.user_id = response.UserID;
      req.session.save();
      //create cookie จำไว้ใน remember_token ด้วย
      let [resUpdate] = await db.query(
        "UPDATE users SET RememberToken = ? WHERE UserID = ?",
        [req.sessionID, response.UserID]
      );
      if (resUpdate.affectedRows === 1) {
        res.status(200).json({ message: "Login Success !" });
      }
    } else {
      res.status(422).json({ message: "Password invalid !" });
    }
  } else {
    res.status(422).json({ message: "Username doesn't exist !" });
  }
});

app.post("/register", async function(req, res) {
  let data = req.body;
  //เขียนดัก password != password confirm
  if (data.password !== data.confirmpass) {
    res.status(422).json({
      status: "error",
      message: "Password not match !"
    });
    return 0;
  }

  //encrypt ก่อนบันทึก
  let hash = await bcrypt.hash(data.password, 10);
  data.password = hash;
  try {
    let [resReg] = await db.query(
      "INSERT INTO user(UserName, UserPassword, UserEmail, UserDisplayName) VALUES (?,?,?,?)",
      [data.username, data.password, data.email, data.displayname]
    );
    if (resReg.affectedRows > 0) {
      res.status(201).json({
        status: "success",
        message: "Register Success !"
      });
    }
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(422).json({
        status: "error",
        message: "Duplicate Username !"
      });
    }
  }
});
//console.log("server");
app.post("/problem", async function(req, res) {
  var match;
  if(!req.query.match)
      match = 0;
  else match = req.query.match;
  let data = req.body;
  //problem_type, problem_detail, description
  let user_id = req.session.userdata.user_id; //get user_id


  // get type_id     ->  get  detail_id 
  
  let [type_id] = await db.query(
    "SELECT DISTINCT problem_type_id FROM problem_type WHERE problem_type = ?;",
    [data.problem_type]
  );
  var t_id = type_id[0].problem_type_id;

  let [detail_id] = await db.query(
    "SELECT DISTINCT problem_detail_id FROM problem_detail WHERE problem_detail = ? AND problem_type_id = ?"
  , [data.problem_Detail, type_id[0].problem_type_id]);

  await db.query("SET GLOBAL FOREIGN_KEY_CHECKS=0;");
  let [resInsert_descript] = await db.query("INSERT INTO problem (user_id, match_id, problem_description, problem_detail_id) VALUES (?,?,?,?)",[user_id, match, data.description, detail_id[0].problem_detail_id]);
  await db.query("SET GLOBAL FOREIGN_KEY_CHECKS=1;");
 
  //alert("Send complete");

  res.json(
    {
      status: 'success',
      action: 'PROBLEM_ADD',
      message: 'Problem added',
      result : data,
      user: user_id,
      match : match,
      type_id : t_id
    }
  );
  
});

app.get('/problem_info', async function(req, res){
  let [details] = await db.query("SELECT DISTINCT problem_detail FROM problem_detail");
  let [types] = await db.query("SELECT DISTINCT problem_type FROM problem_type");
  var log;
  var user_id;
  if(!req.session.userdata) log = 0;
  else{ let user_id = req.session.userdata.user_id; log = 1;}
  res.json(
    {
      problem :
        {
        type:  types,
        detail: details
        },
      user: user_id,
      login: log
    }
);
});

app.get('/analysis', async function(req, res){

  let [ one ] = await db.query(
    "SELECT u.user_name, u.user_display_name, COUNT(*) AS TotalGameRound FROM user u, game_match g, match_player m  WHERE u.user_id = m.user_id AND m.match_id = g.match_id GROUP BY m.user_id ORDER BY TotalGameRound LIMIT 10;"
  );
  let [two] = await db.query(
    "SELECT u.user_name, u.user_display_name, COUNT(*) AS Win FROM user u, game_match g, match_player m  WHERE u.user_id = m.user_id AND m.match_id = g.match_id AND m.score >= 15 GROUP BY m.match_id, m.user_id ORDER BY Win LIMIT 10;"
  );
  let [three] = await db.query(
    "SELECT match_id, (match_end - match_start)/60 AS m_time from game_match WHERE match_type = 'RANK' AND match_status = 'END' ORDER BY m_time DESC LIMIT 10;"
  );
  //
  let [four] = await db.query(
    "select match_id, (match_end - match_start)/60 AS m_time from game_match WHERE match_type = 'NORMAL' AND match_status = 'END' ORDER BY m_time DESC LIMIT 10;"
  );
  let [five] = await db.query(
    "SELECT u.user_name, u.user_display_name , COUNT(*) AS FriendAmount FROM user u, user_relation r WHERE u.user_id = r.user_id AND relation_type = 'FRIEND' GROUP BY u.user_id ORDER BY FriendAmount DESC LIMIT 1;"
  );
  let [six] = await db.query(
    "SELECT user_name, user_display_name, rank_name FROM user WHERE rank_score > 0 ORDER BY rank_score DESC LIMIT 10;"
  );
  let [seven] = await db.query(
    "SELECT CAST ( ( (match_start + 1)%10000000000 ) /100000000  AS INT) AS MONTH, COUNT(*) AS MatchAmount  FROM game_match WHERE match_start >0 GROUP BY MONTH ORDER BY MONTH;"
  );
  let [eight] = await db.query(
    "SELECT rank_name AS RANK,COUNT(*) AS  PlayerAmount FROM user WHERE rank_score > 0 GROUP BY rank_name ORDER BY rank_score DESC LIMIT 10;"
  );
  // skip...
  let [nine] = await db.query(
    "SELECT color_name, SUM(amount) AS Amount FROM player_card q, user u, coin_color c WHERE  u.user_id = q.user_id AND c.color_id = q.color_id GROUP BY q.color_id ORDER BY q.color_id;"
  );
  let [ten] = await db.query(
    "select user_name, user_display_name, COUNT(*) AS ReportAmount from problem p, user u WHERE u.user_id = p.user_id GROUP BY p.user_id ORDER BY ReportAmount DESC LIMIT 1;"
  );
  let [eleven] = await db.query(
    "select  t.problem_type AS problemreporttype, COUNT(*) AS AMOUNT from problem p, problem_detail d, problem_type t WHERE p.problem_detail_id = d.problem_detail_id AND d.problem_type_id = t.problem_type_id GROUP BY t.problem_type_id;"
  );
  let [twelve] = await db.query(
    "select match_type, COUNT(*) AS Amount from game_match WHERE match_status = 'END' AND match_turn > 0 GROUP BY match_type ORDER BY Amount DESC;"
  );
  let [thirteen] = await db.query(
    "SELECT u.user_id , COUNT(*) AS Losetimes FROM game_match g, match_player m, user u WHERE u.user_id = m.user_id AND m.match_id = g.match_id AND g.match_status = 'END' AND m.score < 15 GROUP BY u.user_id  ORDER BY Losetimes DESC LIMIT 1;"
  );
  let [fourteen] = await db.query(
    "SELECT user_role, COUNT(*) AS Amount FROM user GROUP BY user_role;"
  );
  let [fifteen] = await db.query(
    "SELECT AVG ( (match_end - match_start)/60 ) AS 'AVGTime(mins)' from game_match WHERE match_type = 'RANK' AND match_status = 'END';"
  );
  res.json(
    {
      one : one,
      two : two,
      three : three,
      four : four,
      five : five,
      six : six,
      seven : seven,
      eight : eight,
      nine: nine,
      ten : ten,
      eleven : eleven,
      twelve : twelve,
      thirteen : thirteen,
      fourteen : fourteen,
      fifteen : fifteen
    }
  )
}
);

io.use(cookieParser());
io.use(sharedsession(session));
