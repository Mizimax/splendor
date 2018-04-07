const server = require('http').createServer();
const io = require('socket.io')(server);
const port = 8000;
const chat = require('./chat.js').chat;

chat(io);

server.listen(port, function() {
    console.log('Socket.io server is listening on ' + port);
});