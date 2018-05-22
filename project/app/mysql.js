let mysql = require("mysql2-promise")();

// create the connection to database
const connect = function() {
  mysql.configure({
    host: "db.maxang.me",
    user: "root",
    password: "Lw05TNPCmqry",
    database: "splendor"
  });
  return mysql;
};

exports.connect = connect;
