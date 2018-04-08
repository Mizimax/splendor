const port = 80;
const app = require('express')();
const server = app.listen(port)
const io = require('socket.io').listen(server);
const cors = require('cors')
const chat = require('./chat.js').chat;
const mysql = require('mysql2');
const db = require('./mysql.js').connection(mysql);

//db.query();

chat(io);

app.use(cors());

app.get('/', function(req,res) {
    res.send('Web socket on.');
})
