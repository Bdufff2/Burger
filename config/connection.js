// Setup connection to mySQL
var mySQL = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
    connection = mySQL.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mySQL.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "UCSDBd17",
        database: "burgers_DB"
    });
}
// Establish connection
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    } else {
        console.log("connected as id: " + connection.threadId);
    }
});

// Export the connection for orm
module.exports = connection;