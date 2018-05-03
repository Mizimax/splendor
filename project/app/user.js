const bcrypt = require('bcrypt')

const login = function(socket, db){
  
  socket.on('login', function(data) {
    db.query(
    'SELECT * FROM users WHERE UserName = ?',
    [data.username],
    function(err, results) {
      if(!err) {
        if(results.length === 1) {
          console.log(data.password);
          console.log(results[0].password)
          bcrypt.compare(data.password, results[0].password, function(err, res) {
            if(res){
              socket.handshake.session.userdata = results[0].user_id;
              socket.handshake.session.save();
              console.log(socket.handshake.session.userdata);
              //create cookie จำไว้ใน remember_token ด้วย
              socket.emit('login_message', 'Login Success !');
            }
            else {
              socket.emit('login_message', 'Password invalid !');
            }
          });
        }
        else {
          socket.emit('login_message', "Username doesn't exist");
        }
      }
      
    });
    
  });

}

const register = function(socket, db){
  socket.on('register', function(data) {

    //เขียนดัก password != password confirm
    //เขียนดัก username ซ้ำ 
    //encrypt ก่อนบันทึก
    bcrypt.hash(data.password, 10,function(err, hash) {
      data.password = hash;
      db.query(
        'INSERT INTO users(UserName, UserPassword, UserEmail, UserDisplayName) VALUES (?,?,?,?)',
        [data.username, data.password, data.email, data.displayname],
        function(err, results) {
          if(!err) {
            if(results.affectedRows > 0) {
              socket.emit('register_message', 'Register Success !')
            }
          }
      });
    })
    
  });
}

module.exports = { login, register };

