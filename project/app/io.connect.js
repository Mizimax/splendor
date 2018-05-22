let connectSocket;
const initialConnect = function(io, callback) {
  io.on("connection", function(socket) {
    connectSocket = socket;
    callback(socket);
  });
};

module.exports = {
  initialConnect: initialConnect,
  socket: connectSocket
};
