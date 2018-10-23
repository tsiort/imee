var mysql        = require('mysql');

var connection   = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host     : "localhost",
  user     : "imee_admin",
  password : "imee_admin",
  database : "imeedb"
});

module.exports = connection;
