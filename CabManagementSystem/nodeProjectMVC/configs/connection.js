const mysql = require('mysql');

var con = mysql.createConnection({ 
   host: "localhost",
   user: "root",
   password: "",
   database: "CabsMgt" 
});


module.exports = con;