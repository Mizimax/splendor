
const chat = function(socket, db){

    socket.on('chat', function(msg){
        socket.broadcast.emit('chat', msg);
    })
    
}

exports.chat = chat;

