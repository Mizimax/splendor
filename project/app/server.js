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
const room = require("./room.js").room;
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
        "SELECT * FROM user WHERE remember_token = ?",
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
  room(socket);

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
  let [results] = await db.query("SELECT * FROM user WHERE user_name = ?", [
    data.username
  ]);
  if (results.length === 1) {
    let response = results[0];
    let resEncrypt = await bcrypt.compare(data.password, response.user_pw);
    if (resEncrypt) {
      if (!req.session.userdata) req.session.userdata = {};
      req.session.userdata.user_id = response.user_id;
      req.session.userdata.user_role = response.user_role;
      req.session.save();
      //create cookie จำไว้ใน remember_token ด้วย
      let [resUpdate] = await db.query(
        "UPDATE user SET remember_token = ? WHERE user_id = ?",
        [req.sessionID, response.user_id]
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
      "INSERT INTO user(user_name, user_pw, user_email, user_display_name) VALUES (?,?,?,?)",
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

io.use(cookieParser());
io.use(sharedsession(session));
