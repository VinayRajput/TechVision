const config = require('../configs/config.json');
const db = require('../utilities/dbConnect');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secretKey = config.secret;
const sessionSecret = config.sessionSecret;
const sessionTime = 900 * 1000;

const save = function (tableName, obj, callback, id) {
   let sessionEntry = db.extend({
      tableName: tableName,
   });
   entry = new sessionEntry(obj);
   if (id) {
      entry.set('id', id);
   }
   entry.save(callback)
}

const query = function (tableName, query, callback) {
   dbObjUserSession = new db({
      tableName: tableName,
   });
   dbObjUserSession.query(query, callback);
}

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
            save('userSession', {
               "sessID": sessionID.toString(),
               "timestamp": Date.now().toString(),
               "ip": req.connection.remoteAddress.toString()
            }, function (err, result) {
               if (err) console.log(err);
               console.log(result);
               res.json({ sessionID: sessionID, status: "success" });
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
         tableName: 'userSession'
      });

      //console.log('sessID', sessID);

      findSession = new checkSession();
      findSession.find('all', { where: `sessID = '${sessID}' and ip='${req.connection.remoteAddress}'`, fields: ['id', 'sessID', 'timestamp', 'ip'] }, function (err, row, fields) {
         console.log(row.length);
         if (row.length === 0) {
            res.json({ 'error': 'no session found' });
         } else {
            const dbSessionTimestamp = row[0].timestamp;
            const validTimestamp = parseInt(row[0].timestamp) + sessionTime;
            const sessionIsValid = (validTimestamp > Date.now());

            console.log(sessionIsValid);
            if (!!row && !!sessionIsValid) {
               save('userSession', {
                  "sessID": sessID,
                  "timestamp": Date.now().toString(),
                  "ip": req.connection.remoteAddress.toString()
               }, function (err, result) {
                  if (err) {
                     console.log(err);
                     res.json({ error: err });
                  }
                  //console.log(result);
                  res.json({ auth: "valid" });
               }, row[0].id)

            } else {
               res.json({ auth: "invalid" });
            }
         }
      });
      /* findSession.find('field', { 'fields': ['sessID', 'timestamp'] }, function (err, sessId, fields) {
         //console.log(sessId, sessID === sessId)
      }) */
   }
}