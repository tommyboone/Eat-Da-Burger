var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "boap2heq0x5rr969",
  port: 3306,
  user: "u4eh14icug8d0ms1",
  password: "q99ahdj0rrqwtnpc",
  database: "boap2heq0x5rr969"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;