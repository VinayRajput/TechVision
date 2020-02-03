const config = require('../configs/config.json');
const db = require('../utilities/dbConnect');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secretKey = config.secret;
//const fileupload = require('express-fileupload');

exports.authenticate = function (req, res) {
   // const email = req.body.email
   // const password = req.body.pwd
   const email = req.query.email
   const password = req.query.pwd
   
   if (!email || !password ) {
      res.json({"msg": 'Authentication failed. User not found.'});
   }

   const User = db.extend({
      tableName: "user",
      email:email
   });
   user = new User();

   user.find('all' , function (err, row, fields) {
      if(err) res.json({"noRecord":"No Record Found"});
      
      if (row.length > 0) {
        //res.json({msg:'user found'})
        res.send(jwt.sign({ sessionID: row.password }, secretKey));
        console.log(jwt.verify(row.password, secretKey));

         let decoded = jwt.verify(row.password, secretKey);
         console.log(decoded);
         if (decoded.password === password) {
            let sessionID = jwt.sign({ sessionID: row.password }, secretKey);
            res.json({sessionID:sessionID})
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