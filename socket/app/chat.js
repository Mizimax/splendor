
const chat = function(io){
    let numUsers = 0;

    io.on('connection', function(socket){

        numUsers++;
        console.log('Total users : ' + numUsers);

        socket.on('chat', function(msg){
            chatHistory.push(msg);
            socket.broadcast.emit('chat', msg)
        })

        socket.on('clearChat', function(){
            chatHistory = [];
        })

        socket.on('disconnect', function(){
            numUsers--;
            console.log('Total users : ' + numUsers);
        })

    });
}

exports.chat = chat;

