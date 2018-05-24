const db = require("./mysql").connect();
const socket = require("./io.connect").socket;

const room = function(socket) {
  socket.on("ROOM_JOIN", async function(data) {});
  socket.on("ROOM_CREATE", async function(data) {
    var date = new Date();
    var dateTime =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    let [resUniqueCreate] = await db.query(
      "SELECT * FROM game_match WHERE host_id = ? AND match_status = 'WAITING'",
      [socket.handshake.session.userdata.user_id]
    );
    if (resUniqueCreate.length == 0) {
      let [resCreate] = await db.query(
        "INSERT INTO game_match(host_id,match_name,match_status,match_type,match_password,match_start,match_player_no) VALUES (?,?,?,?,?,?,?)",
        [
          socket.handshake.session.userdata.user_id,
          data.roomName,
          "WAITING",
          "NORMAL",
          data.password,
          dateTime,
          4
        ]
      );
      if (resCreate.length != 0) {
        try {
          let [resCreatePlayer] = await db.query(
            "INSERT INTO match_player VALUES (?,?,?)",
            [resCreate.insertId, socket.handshake.session.userdata.user_id, 0]
          );
          if (resCreatePlayer.affectedRows != 0) {
            socket.join(resCreate.insertId);
            socket.to(resCreate.insertId).on("PLAYER_READY", function(data) {
              console.log(data);
            });
            socket.emit("ROOM_MESSAGE", {
              status: "success",
              action: "CREATE_ROOM",
              message: "Room" + resCreate.insertId + "Created",
              match_id: resCreate.insertId
            });
          }
        } catch (error) {
          if (error.code === "ER_DUP_ENTRY") {
            socket.emit("ROOM_MESSAGE", {
              status: "error",
              action: "JOIN_ROOM",
              message: "Already Joined",
              match_id: resCreate.insertId
            });
          }
        }
      }
    } else {
      socket.emit("ROOM_MESSAGE", {
        status: "error",
        action: "CREATE_ROOM",
        message: "Room Exist ! Join exist room !"
      });
      try {
        let [resCreatePlayer] = await db.query(
          "INSERT INTO match_player VALUES (?,?,?)",
          [
            resUniqueCreate[0].match_id,
            socket.handshake.session.userdata.user_id,
            0
          ]
        );
        if (resCreatePlayer.affectedRows != 0) {
          socket.join(resUniqueCreate[0].match_id);
          socket.emit("ROOM_MESSAGE", {
            status: "success",
            action: "JOIN_ROOM",
            message: "Room" + resUniqueCreate[0].match_id + "Joined",
            match_id: resUniqueCreate[0].match_id
          });
        }
      } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
          socket.emit("ROOM_MESSAGE", {
            status: "error",
            action: "JOIN_ROOM",
            message: "Already Joined"
          });
        }
      }
    }
  });

  socket.on("ROOM_JOIN_PLAYING", async function() {
    // socket.broadcast.emit("chat", msg);
    let [res] = await db.query(
      "SELECT match_id FROM game_match WHERE host_id = ? AND match_status = ?",
      [socket.handshake.session.userdata.user_id, "PLAYING"]
    );

    if (res.length != 0) {
      socket.join(res[0].match_id);
      socket.emit("ROOM_MESSAGE", {
        status: "success",
        action: "JOIN_ROOM",
        message: "Join room " + res[0].match_id,
        match_id: res[0].match_id
      });
    } else {
      socket.emit("ROOM_MESSAGE", {
        status: "error",
        action: "JOIN_ROOM",
        message: "You aren't playing on game"
      });
    }

    // socket.join('')
    // so
  });
};

exports.room = room;
