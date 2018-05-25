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
        "SELECT * FROM users WHERE RememberToken = ?",
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
      "INSERT INTO users(UserName, UserPassword, UserEmail, UserDisplayName) VALUES (?,?,?,?)",
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
  //let match = req.query.match;
  let data = req.body;
  //problem_type, problem_detail, description
  //let user_id = req.session.userdata.user_id;
  //let [resInsert] = await db.query("INSERT INTO problem VALUES (1,?,?,?)",[user_id, match, data.description]);
  //alert("Send complete");
  res.json(
    {
      status: 'success',
      action: 'PROBLEM_ADD',
      message: 'Problem added'
    }
  );
  
});

app.get('/problem_info', async function(req, res){
  let [details] = await db.query("SELECT DISTINCT problem_detail FROM problem_detail");
  let [types] = await db.query("SELECT DISTINCT problem_type FROM problem_type");
  res.json(
    {
      problem :
        {
        type:  types,
        detail: details
        },

      
    }
);
});

io.use(cookieParser());
io.use(sharedsession(session));
