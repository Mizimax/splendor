const express = require('express');
const app = express(); 
const port = 8000;
const path = __dirname + "/";

app.use(express.static(path))

app.listen(port, ()=>console.log('web server running on port ' + port))