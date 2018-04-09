
const login = function(socket, db){
   
    socket.on('login', async function(data) {
      let [err, results] = await connection.query(
        'SELECT * FROM users WHERE UserName = ? AND UserPassword = ?',
        [data.username, data.password]);
      console.log(results);
        
    });

}

const register = function(socket, db){

}

module.exports = { login, register };

