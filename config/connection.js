// Import packages
const mysql = require("mysql");

// For testing on localhost
/* const config_localhost = {
    "host"    : "localhost",
    "port"    : 3306,
    "user"    : "devuser",
    "password": "Abcd123!",
    "database": "burgers_db"
};

// Connect to database
const pool = mysql.createPool(process.env.JAWSDB_URL || config_localhost); 


module.exports = pool; */

// 
// 
var connection = mysql.createConnection({
    "host"    : "localhost",
    "port"    : 3306,
    "user"    : "devuser",
    "password": "AbcD123!",
    "database": "burgers_db"
  });
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;