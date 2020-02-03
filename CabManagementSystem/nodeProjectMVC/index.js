const express = require('express');
const driverRoutes = require('./routes/routes');
const con = require('./configs/connection')
const app = express();

app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin','*');
   res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
   next();
});
/**************/
dbQuery = (sqlQuery, cb) => {
      con.query(sqlQuery, function (err, response) {
         if (err) {
            console.log(err)
            return { error: err }
         }
         cb(response);
      })
   }
   con.connect(function (err) {
      if (err) throw err;
      console.log("connected to database in nodeProject MVC index");
   });
app.use('/',driverRoutes);
app.listen(8080,'localhost');