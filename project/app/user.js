const bcrypt = require("bcrypt");

const login = function(socket, db) {
  socket.on("login", async function(data) {
    let [results] = await db.query("SELECT * FROM users WHERE UserName = ?", [
      data.username
    ]);
    if (results.length === 1) {
      let res = results[0];
      let resEncrypt = await bcrypt.compare(data.password, res.UserPassword);
      if (resEncrypt) {
        if (!socket.handshake.session.userdata)
          socket.handshake.session.userdata = {};
        socket.handshake.session.userdata.user_id = res.UserID;
        socket.handshake.session.save();
        //create cookie จำไว้ใน remember_token ด้วย
        let [resUpdate] = await db.query(
          "UPDATE users SET RememberToken = ? WHERE UserID = ?",
          [socket.handshake.sessionID, res.UserID]
        );
        if (resUpdate.affectedRows === 1) {
          socket.emit("login_message", "Login success !");
        }
      } else {
        socket.emit("login_message", "Password invalid !");
      }
    } else {
      socket.emit("login_message", "Username doesn't exist !");
    }
  });
};

const register = function(socket, db) {
  socket.on("register", async function(data) {
    //เขียนดัก password != password confirm
    if (data.password !== data.password2) {
      socket.emit("register_message", {
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
        socket.emit("register_message", {
          status: "success",
          message: "Register Success !"
        });
      }
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        socket.emit("register_message", {
          status: "error",
          message: "Duplicate Username !"
        });
      }
    }
  });
};

module.exports = { login, register };
