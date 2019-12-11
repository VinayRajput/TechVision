'use strict';

/*const courses = require('../model/courses');
const subject = require('../model/subject');
const session = require('../model/session');*/

var dbm;
var type;
var seed;
var courses = require("../model/courses");
var subject = require("../model/subject");
var session = require("../model/session");
var async = require('async');

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  console.log('setup...')
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.check = function (db, callback) {
  db.addForeignKey('session','subject', 'session_subject_fkey',
    {
      'id': 'id'
    },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback);
}
exports.up = function (db, callback) {
  async.series([
    db.createTable.bind(db, 'session', session),
    db.createTable.bind(db, 'courses', courses),
    db.createTable.bind(db, 'subject', subject)

  ], function (err) {
    if (err) return callback(err);
    console.log(err);
    return callback();
  })


};

exports.down = function (db, callback) {
  async.series([
    db.dropTable.bind(db, 'courses'),
    db.dropTable.bind(db, 'subject'),
    db.dropTable.bind(db, 'session')
  ], function (err) {
    if (err) return callback(err);
    console.log(err)
    return callback();
  })
};

exports._meta = {
  "version": 1
};
