const server = require('http').createServer();
const io = require('socket.io')(server);
const port = 8000;

io.on('connection', function(client){
  client.on('event', function(data){});
  client.on('disconnect', function(){});
});

server.listen(port, function() {
    console.log('Socket.io server is listening on ' + port);
});