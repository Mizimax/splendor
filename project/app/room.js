const db = require("./mysql").connect();
const socket = require("./io.connect").socket;

const room = function(socket) {
  socket.on("ROOM_JOIN", async function() {
    // socket.broadcast.emit("chat", msg);
    let [res] = await db.query(
      "SELECT match_id FROM game_match WHERE host_id = ? ",
      [socket.handshake.session.userdata.user_id]
    );
    console.log(res);
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
