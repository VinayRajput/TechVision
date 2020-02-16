const config = require('../configs/config.json');
const db = require('../utilities/dbConnect');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secretKey = config.secret;
const sessionSecret = config.sessionSecret;
//const fileupload = require('express-fileupload');

exports.authenticate = function (req, res) {
   const email = req.body ? req.body.email : req.query ? req.query.email : '';
   const password = req.body ? req.body.pwd : req.query ? req.query.pwd : ''
   if (!email || !password) {
      res.json({ "msg": 'Please enter username and password.' });
   }

   const User = db.extend({
      tableName: "user",
      email: email
   });
   user = new User();

   user.find('field', { fields: ['password'] }, function (err, pwd, fields) {
      
      if (err) res.json({ "noRecord": "No Record Found" });

      console.log('row:', pwd);

      if (!!pwd) {
         //res.json({msg:'user found'});
         //res.send(jwt.sign({ password: password }, secretKey));
         //console.log(jwt.verify(row.password, secretKey));

         let decoded = jwt.verify(pwd, secretKey);
         //console.log(decoded.password);
         if (decoded.password === password) {
            let sessionID = jwt.sign({ sessionID: pwd }, sessionSecret);

           const sessionEntry = db.extend({
            tableName:''
           })

            res.json({ sessionID: sessionID })
            // const sessionQuery = `insert into sessions values("${sessionID}", "${req.body.email}")`;
            // con.query(sessionQuery, function (err, data) {
            //    if (err) {
            //       console.log(err);
            //       res.json({
            //          status: 'Error occurred while creating session'
            //       });
            //    }
            //    res.json({ status: "success", sessionID: sessionID });
            // })
         }
         else
            res.json({ status: "Wrong Password" });
      }


   });
}