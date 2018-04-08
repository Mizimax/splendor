// create the connection to database
const connection = function(mysql) {
    return mysql.createConnection({
        host: 'db.maxang.me:3306',
        user: 'root',
        password: 'kIsM2e98r8Gf',
        database: 'splendor'
    });
}

exports.connection = connection;