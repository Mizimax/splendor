const db = require("./mysql").connect();

const login = function(socket) {
  socket.on("login", function(data) {
    //encrypt password ก่อนตรวจกับ db ใช้ package bcrypt

    db.query(
      "SELECT * FROM users WHERE UserName = ? AND UserPassword = ?",
      [data.username, data.password],
      function(err, results) {
        if (!err) {
          if (results.length === 1) {
            //create token ใช้ package jwt
            //create cookie จำไว้ใน remember_token ด้วย
            socket.emit("login_message", "Login Success !");
          } else {
            socket.emit("login_message", "Username or Password invalid !");
          }
        }
      }
    );
  });
};

const register = function(socket, db) {
  socket.on("register", function(data) {
    //เขียนดัก password != password confirm
    //เขียนดัก username ซ้ำ
    //encrypt ก่อนบันทึก

    db.query(
      "INSERT INTO users(UserName, UserPassword, UserEmail, UserDisplayName) VALUES (?,?,?,?)",
      [data.username, data.password, data.email, data.displayname],
      function(err, results) {
        if (!err) {
          if (results.affectedRows > 0) {
            socket.emit("register_message", "Register Success !");
          }
        }
      }
    );
  });
};

module.exports = { login, register };
