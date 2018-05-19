const express = require("express");
const app = express();
const cors = require("cors");
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

const auth = require("./auth.js").auth;
const chat = require("./chat.js").chat;
//const user = require("./user.js");
const io_connect = require("./io.connect.js");

auth(io);

io.on("connection", function(socket) {
  let numUsers = 0;
  numUsers++;
  console.log("Total users : " + numUsers);

  auth(socket, chat(socket));

  socket.on("disconnect", function() {
    numUsers--;
    console.log("Total users : " + numUsers);
  });
});

app.use(cors());
app.use(session);
app.use(express.static(__dirname + "/../web"));

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
  if (data.password !== data.password2) {
    res.status(404).json({
      status: "error",
      message: "Password not match !"
    });
    return 0;
  }

  //encrypt ก่อนบันทึก
  let hash = await bcrypt.hash(data.password, 10);
  data.password = hash;
  try {
    let [res] = await db.query(
      "INSERT INTO users(UserName, UserPassword, UserEmail, UserDisplayName) VALUES (?,?,?,?)",
      [data.username, data.password, data.email, data.displayname]
    );

    if (res.affectedRows > 0) {
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
