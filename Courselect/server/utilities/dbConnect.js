var mysqlModel = require('mysql-model');
var config = require('../configs/config.json')
const dbConfig = config.dbConfig;
var db = mysqlModel.createConnection(dbConfig);

 module.exports = db;