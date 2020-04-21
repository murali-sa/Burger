// Import packages
const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'devuser',
    password: 'AbcD123!',
    database: 'burgers_db'
  });
};
connection.connect();

// For testing on localhost
/* const config_localhost = {
    "host"    : "i2cpbxbi4neiupid.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "port"    : 3306,
    "user"    : "swa8285i5p7uhtt7",
    "password": "vp41zzfehiaqk4tq",
    "database": "obgc6pti8sfx5n53"
};

// Connect to database
const connection = mysql.createPool(process.env.JAWSDB_URL || config_localhost); 


module.exports = connection; */

// 
// 
/* var connection = mysql.createConnection({
  "host": "localhost",
  "port": 3306,
  "user": "devuser",
  "password": "AbcD123!",
  "database": "burgers_db"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
}); */

// Export connection for our ORM to use.
module.exports = connection;