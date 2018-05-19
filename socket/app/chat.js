const db = require("./mysql").connect();

const chat = function() {
  socket.on("chat", function(msg) {
    socket.broadcast.emit("chat", msg);
  });
};

exports.chat = chat;
