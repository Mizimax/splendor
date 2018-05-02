const jwt = require('jsonwebtoken');
const secret_key = 'databaseza';

const auth = function() {
  var token = req.body.token || req.query.token || req.headers['x-access-token']
  if (token) {
      jwt.verify(token, secret_key, function(err, decoded) {      
          if (err) {
              res.status(401).json({ error: 'Failed to authenticate or token expired.', err: err });   
          } else {
              req.decoded = decoded    
              next();
          }
      });
  } else {
      res.status(403).json({ 
          error: 'Cannot Access'
      })
  }
}

module.exports = {
  auth: auth
}