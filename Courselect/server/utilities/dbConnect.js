var mysqlModel = require('mysql-model');
var config = require('../configs/config.json')
const dbConfig = config.dbConfig;
var db = mysqlModel.createConnection(dbConfig);
/* exports.dbFind = function(tableName, ){}*/
 module.exports = db;