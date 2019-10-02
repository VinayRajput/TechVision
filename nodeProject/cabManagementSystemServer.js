const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   
   //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   //res.header('Allow-Control-Access-Header', 'Content-Type');
   next();
});
app.use(bodyParser.json());

var storage =   multer.diskStorage({
   destination: function (req, file, callback) {
     callback(null, './uploads');
   },
   filename: function (req, file, callback) {
     callback(null, file.fieldname + '-' + Date.now());
   }
 });
 var upload = multer({ storage : storage}).single('userPhoto');
 

dbQuery =(sqlQuery,cb) =>{
   con.query(sqlQuery,function(err,response){
      if(err){
         console.log(err)
          return {error:err}
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

app.post('/addDriver', function (req, res) {
   /* const queryString = `insert in to drivers(license, dob, photo, documents, name) values('${req.body.license}','${req.body.dob}',${req.body.photo || null},${req.body.documents|| null},'${req.body.name}')`
   console.log(queryString);  */

   const queryString = `insert into drivers(license, dob, name) values("${req.body.license}","${req.body.dob}","${req.body.name}")`;

   console.log(queryString); 

   con.query(queryString, function (err, data) {
      if(err){
         console.log(err);
         res.json({error:'error occurred: '+err});
      }else{
      res.send(data);
      }
   });

  })

app.get('/',function(req,res){
   res.send("<h3>Server running, hit with correct request! <3   </h3>")
})


app.get('/getDrivers', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from drivers", function (err, data) {
      console.log(data);
      res.json(data);
   });
});

app.get('/getDriver/:id', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from drivers where id=" + req.param.id, function (err, data) {
      console.log(data);
      res.json(data);
   });
});

app.delete('/deleteDriver/:id', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("delete * from drivers where id=" + req.param.id, function (err, data) {
      console.log(data);
      res.json(data);
   });
});

app.post('/updateDriver', function (req, res) {
   //res.header("Access-Control-Allow-Origin", "*");
   console.log(req.files);
   upload(req,res,function(err) {
         if(err) {
             return res.end("Error uploading file.");
         }
         res.end("File is uploaded");
     });
     
   
   res.json({});


   return;

   //let {name,dob,id} from req.params;

   let driverDetails = req.param("data");
   let files = req.param("files");

   const sqlQuery = `update drivers set name='${driverDetails.name}', dob='${driverDetails.dob}', license='${driverDetails.license}' where id=${driverDetails.id};`;

   console.log(sqlQuery);

   /* dbQuery(sqlQuery,function(response){
      console.log(sqlQuery);
      console.log(response);
      res.json(response);
   }); */
})



app.put('/addVehicle', function () {
   con.query(`insert in to vehicle(model, make, registration_no, city) values(${req.body.model},${req.body.make},${req.body.registration_no},${req.body.city})`, function (err, DBresponse) {
      if (err)
         res.send('Error inserting vehicle data, please try later')
      res.send(DBresponse);
   })
})

app.get('/getVehicles', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from vehicle", function (err, data) {
      console.log(data);
      res.json(data);
   });
});

app.get('/getVehicle/:id', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from vehicle where id=" + req.param.id, function (err, data) {
      console.log(data);
      res.json(data);
   });
});


   app.get('/deleteVehicle/:id', function (req, res) {
      res.header("Access-Control-Allow-Origin", "*");
      con.query("delete from vehicle where id=" + req.param.id, function (err, data) {
         console.log(data);
         res.json(data);
      });
   });






app.listen(8080);

