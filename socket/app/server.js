const port = 8000;
const app = require('express')();
const cors = require('cors')
const mysql = require('mysql2');
const server = app.listen(port)
const io = require('socket.io').listen(server);

const chat = require('./chat.js').chat;
const user = require('./user.js');
const db = require('./mysql.js').connection(mysql);

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


app.use(cors());

app.get('/', function(req,res) {
    res.send('Web socket on.');
})
