const config = require('../configs/config.json');
const db = require('../utilities/dbConnect');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secretKey = config.secret;
const sessionSecret = config.sessionSecret;

exports.authenticate = function (req, res) {
   let email, password;
   if (req.body && req.body.email) {
      email = req.body.email;
      password = req.body.pwd;
   } else if (req.query && req.query.email) {
      email = req.query.email;
      password = req.query.pwd;
   }
   if (!email || !password) {
      res.json({ "msg": 'Please enter username and password.' });
      return;
   }
   const User = db.extend({
      tableName: "user",
      email: email
   });
   user = new User();
   user.find('field', { fields: ['password'] }, function (err, pwd, fields) {
      if (err) res.json({ "noRecord": "No Record Found" });
      if (!!pwd) {
         let decoded = jwt.verify(pwd, secretKey);
         if (decoded.password === password) {
            let sessionID = jwt.sign({ sessionID: pwd }, sessionSecret);
            /* let sessionEntry = db.extend({
               tableName: 'userSession',
            });
            entry = new sessionEntry({
               "sessID": sessionID.toString(),
               "timestamp": Date.now().toString()
            });
            console.log('entry', entry);
            entry.save(function () {
               res.json({ sessionID: sessionID })
            })
             */

            dbObjUserSession = new db({
               tableName: "userSession",
            });
            dbObjUserSession.query(`insert into userSession(sessID, timestamp) values("${sessionID}","${Date.now()}")`, function () {
               res.json({ sessionID: sessionID });
            });


         }
         else
            res.json({ status: "Wrong Password" });
      }
   });
}

exports.userAuth = function (req, res) {
   if (req.body && req.body.sessID) {
      var sessID = req.body.sessID;
      const checkSession = db.extend({
         tableName: 'userSession',
         sessID: sessID
      });

      //console.log('sessID', sessID);

      findSession = new checkSession();
      findSession.find('all', { fields: ['sessID', 'timestamp'] }, function (err, sessId, fields) {
         console.log(sessId);
      });
      /* findSession.find('field', { 'fields': ['sessID', 'timestamp'] }, function (err, sessId, fields) {
         //console.log(sessId, sessID === sessId)
      }) */
   }
}