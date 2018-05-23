const db = require("./mysql").connect();
const socket = require("./io.connect").socket;

const chat = function(socket) {
  socket.on("chat", function(msg) {
    socket.broadcast.emit("chat", msg);
  });
};

exports.chat = chat;
