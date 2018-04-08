
const chat = function(io){
    let numUsers = 0;

    io.on('connection', function(socket){

        numUsers++;
        console.log('Total users : ' + numUsers);

        socket.on('chat', function(msg){
            socket.broadcast.emit('chat', msg);
            console.log(msg);
        })

        socket.on('disconnect', function(){
            numUsers--;
            console.log('Total users : ' + numUsers);
        })

    });
}

exports.chat = chat;

