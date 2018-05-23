const db = require("./mysql").connect();

const auth = function(socket, callback) {
  return async function() {
    if (socket.request.session.userdata) return callback();

    let resCookieAuth = await db.query(
      "SELECT * FROM users WHERE RememberToken = ?",
      [socket.handshake.sessionID]
    );
    console.log(resCookieAuth);
    if (resCookieAuth) {
    }
    let err = new Error("Authentication error");
    err.data = { type: "authentication_error" };
    socket.emit("error", { auth: "Authentication Error" });
  };
};

module.exports = {
  auth: auth
};
