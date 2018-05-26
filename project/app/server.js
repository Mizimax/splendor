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
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/login", async function(req, res) {
  let data = req.body;
  let [results] = await db.query("SELECT * FROM user WHERE UserName = ?", [
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
        "UPDATE user SET RememberToken = ? WHERE UserID = ?",
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
io.use(cookieParser());
io.use(sharedsession(session));
