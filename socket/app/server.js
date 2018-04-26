const port = 8000;
const app = require('express')();
const server = app.listen(port)
const io = require('socket.io').listen(server);
const cors = require('cors')
const chat = require('./chat.js').chat;

chat(io);

app.use(cors());
