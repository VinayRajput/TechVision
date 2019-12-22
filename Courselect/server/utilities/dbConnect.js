var mysqlModel = require('mysql-model');

var db = mysqlModel.createConnection({
   host     : '127.0.0.1',
   user     : 'root',
   password : '',
   database : 'courselect',
 });

 module.exports = db;