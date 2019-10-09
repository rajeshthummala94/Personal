var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "rajesh.1234",
    database: "grubhub1"
});

module.exports = pool;
