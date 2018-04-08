// create the connection to database
const connection = function(mysql) {
    return mysql.createConnection({
        host: 'db.maxang.me',
        user: 'root',
        password: 'kIsM2e98r8Gf',
        database: 'splendor'
    });
}

exports.connection = connection;