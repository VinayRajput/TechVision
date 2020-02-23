'use strict';
/*const courses = require('../model/courses');
const subject = require('../model/subject');
const session = require('../model/session');*/

var dbm;
var type;
var seed;
var course = require("../model/course");
var subject = require("../model/subject");
var session = require("../model/session");
var topic = require("../model/topic");
var user = require("../model/user");
var userSession = require("../model/userSession");
var MysqlTools = require('mysql-tools');
var config = require('../configs/config.json');
var dbConfig = config.dbConfig;

var mapping = require("../model/mapping");
var async = require('async');

// create database dump sql file
var tool = new MysqlTools();

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  /*   db.createTable('topic', topic, callback);
    db.createTable('session', session, callback);
    db.createTable('subject', subject, callback);
    db.createTable('course', course, callback);
    db.createTable('mapping', mapping, callback);
    db.createTable('user', user, callback);
    db.createTable('userSession', userSession, callback); */
  dbConfig.sqlFilePath = config.mysqlDumpPath

  tool.restoreDatabase(dbConfig, function (error, output, message) {
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log(output);
      console.log(message);
    }
  });
};

exports.down = function (db, callback) {
  dbConfig.dumpPath = config.mysqlDumpPath
  tool.dumpDatabase(dbConfig, function (error, output, message, dumpFileName) {
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log(output);
      console.log(message);
      console.log(dumpFileName);
      db.removeForeignKey('mapping', 'topic_fk');
      db.removeForeignKey('mapping', 'session_fk');
      db.removeForeignKey('mapping', 'subject_fk');
      db.removeForeignKey('mapping', 'course_fk');
      db.dropTable('topic', callback);
      db.dropTable('session', callback);
      db.dropTable('subject', callback);
      db.dropTable('course', callback);
      db.dropTable('mapping', callback);
      db.dropTable('user', callback);
      db.dropTable('userSession', callback);
      return;
    }
  });
  //mysqlDump({ connection: dbConfig, dumpToFile: mysqlDumpPath });
};

exports._meta = {
  "version": 1
};
