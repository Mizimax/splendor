// create the connection to database
const connection = function(mysql) {
    return mysql.createConnection({
        host: 'db.maxang.me',
        user: 'root',
        password: 'Lw05TNPCmqry',
        database: 'splendor'
    });
}

exports.connection = connection;