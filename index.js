var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.emit('some event', { for: 'everyone' });

http.listen(8000, function(){
  console.log('listening on *:8000');
});