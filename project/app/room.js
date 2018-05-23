const db = require("./mysql").connect();
const socket = require("./io.connect").socket;

const room = function(socket) {
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
    let [resCreate] = await db.query(
      "INSERT INTO game_match(host_id,match_name,match_status,match_type,match_password,match_player_no) VALUES (?,?,?,?,?,?)",
      [
        socket.handshake.session.userdata.user_id,
        data.roomName,
        "WAITING",
        "NORMAL",
        data.password,
        4
      ]
    );
  });
  socket.on("ROOM_JOIN", async function() {
    // socket.broadcast.emit("chat", msg);
    let [res] = await db.query(
      "SELECT match_id FROM game_match WHERE host_id = ? AND match_status = ?",
      [socket.handshake.session.userdata.user_id, "PLAYING"]
    );

    if (res.length != 0) {
      socket.join(res.match_id);
      socket.emit("ROOM_MESSAGE", {
        status: "success",
        action: "JOIN_ROOM",
        message: "Join room " + res.match_id
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
