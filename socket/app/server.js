const port = 8888;
const app = require('express')();
const cors = require('cors')
const mysql = require('mysql2');
const server = app.listen(port)
const io = require('socket.io').listen(server);

const chat = require('./chat.js').chat;
const user = require('./user.js');
const db = require('./mysql.js').connection(mysql);

<<<<<<< HEAD
io.on('connection', function(socket){
    let numUsers = 0;
    numUsers++;
    console.log('Total users : ' + numUsers);

    chat(socket, db);
    user.login(socket, db);
    user.register(socket, db);
    
    socket.on('disconnect', function(){
        numUsers--;
        console.log('Total users : ' + numUsers);
    })
});

=======
chat(io);
>>>>>>> a50ec79c937c835f1ae3d799086b3e9976e8fa5b

app.use(cors());

app.get('/', function(req,res) {
    res.send('Web socket on.');
})
