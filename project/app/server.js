const port = 8888;
const express = require('express');
const app = express();
const cors = require('cors')
const session = require('express-session')
const sharedsession = require('express-socket.io-session')
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
app.use(session({ secret: 'splendor' }))
app.use(express.static(__dirname + '/../web'))

// io.use(sharedsession(session, {
//   autoSave:true
// })); 


