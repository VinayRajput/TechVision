const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fileupload = require('express-fileupload');
const secretKey = "xt-gtxd";

app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   next();
});
app.use(fileupload());
app.use(bodyParser.json());

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

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "cabmgmtsystem"
});

con.connect(function (err) {
   if (err) throw err;
   console.log("connected to database");
});
/**************/
app.post('/checkSession', function (req, res) {
   let sessionID = req.sessionID;
   con.query(`select sessionID from sessions where sessionID="${req.body.sessionID}";`, (err, data) => {
      if (err) {
         res.json({ status: "timeout" });
      } else {
         res.json({ status: "valid" });
      }
   })
})
/**************/
app.post('/login', function (req, res) {
   let sqlQuery = `select password from users where username="${req.body.email}"`;

   dbQuery(sqlQuery, function (response) {
      if (response.length > 0) {
         let decoded = jwt.verify(response[0].password, secretKey);
         if (decoded.password === req.body.pwd) {
            let sessionID = jwt.sign({ sessionID: response[0].password }, secretKey);
            const sessionQuery = `insert into sessions values("${sessionID}", "${req.body.email}")`;
            con.query(sessionQuery, function (err, data) {
               if (err) {
                  console.log(err);
                  res.json({
                     status: 'Error occurred while creating session'
                  });
               }
               res.json({ status: "success", sessionID: sessionID });
            })

         }
         else
            res.json({ status: "Wrong Password" });
      }
      else {
         res.json({ status: "Username not found" });
      }
   })
})
/**************/
app.post('/register', function (req, res) {
   const name = req.body.name.split(" ");
   let mname = "";
   if (name.length > 2) {
      mname = name[1];
   }

   let encryptedToken = jwt.sign({ password: req.body.pwd }, secretKey);

   //console.log(encryptedToken);

   let sqlQuery = `insert into users(fname,mname,lname,username,password) values("${name[0]}", "${mname}","${name[2]}", "${req.body.email}", "${encryptedToken}") `;

   con.query(sqlQuery, function (err, data) {
      if (err) {
         console.log(err.code);
         res.json({ status: err.code });
      } else {
         res.json({ status: "Registration Successful" });
      }
   })
})

/**************/
app.get('/', function (req, res) {
   res.send("<h3>Server running, hit with correct request! <3   </h3>")
})

/**************/
app.get('/getDrivers', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from drivers", function (err, data) {
      //console.log(data);
      res.json(data);
   });
});
/**************/
app.get('/getDriver/:id', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from drivers where id=" + req.param.id, function (err, data) {
      //console.log(data);
      res.json(data);
   });
});
/**************/
app.delete('/deleteDriver/:id', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("delete * from drivers where id=" + req.param.id, function (err, data) {
      //console.log(data);
      res.json(data);
   });
});
/**************/
app.post('/addDriver', function (req, res) {
   /* const queryString = `insert in to drivers(license, dob, photo, documents, name) values('${req.body.license}','${req.body.dob}',${req.body.photo || null},${req.body.documents|| null},'${req.body.name}')`
   console.log(queryString);  */

   const queryString = `insert into drivers(license, dob, name) values("${req.body.license}","${req.body.dob}","${req.body.name}")`;

   //console.log(queryString);

   con.query(queryString, function (err, data) {
      if (err) {
         //console.log(err);
         res.json({ error: 'error occurred: ' + err });
      } else {
         res.send(data);
      }
   });
})
/**************/
app.post('/updateDriver', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   if (req.files !== null) {
      //console.log(req.files);
      for (key in req.files) {
         let file = req.files[key];
         console.log(file);
         
            file.mv(`${__dirname}/uploads/${file.name}`, err => {
               if (err) {
                  console.log(err);
                  res.status(500).json({ status: 'error', msg: 'Error Occurred whilie uploading a file', filename: file.name });
               }
            })
      
      }


   } else {

      console.log('file not found');

   }

   /*
      let driverDetails = req.param("data");
      
      const sqlQuery = `update drivers set name='${driverDetails.name}', dob='${driverDetails.dob}', license='${driverDetails.license}' where id=${driverDetails.id};`;
   
      console.log(sqlQuery);
   */
   /* dbQuery(sqlQuery,function(response){
      console.log(sqlQuery);
      console.log(response);
      res.json(response);
   }); */
})

/**************/

app.put('/addVehicle', function () {
   con.query(`insert in to vehicle(model, make, registration_no, city) values(${req.body.model},${req.body.make},${req.body.registration_no},${req.body.city})`, function (err, DBresponse) {
      if (err)
         res.send('Error inserting vehicle data, please try later')
      res.send(DBresponse);
   })
})
/**************/
app.get('/getVehicles', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from vehicle", function (err, data) {
      //console.log(data);
      res.json(data);
   });
});
/**************/
app.get('/getVehicle/:id', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from vehicle where id=" + req.param.id, function (err, data) {
      //console.log(data);
      res.json(data);
   });
});
/**************/
app.get('/deleteVehicle/:id', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("delete from vehicle where id=" + req.param.id, function (err, data) {
      //console.log(data);
      res.json(data);
   });
});
app.listen(8080);

