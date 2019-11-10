driverController.get('/getDrivers', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from drivers", function (err, data) {
      //console.log(data);
      res.json(data);
   });
});
/**************/
driverController.get('/getDriver/:id', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from drivers where id=" + req.param.id, function (err, data) {
      //console.log(data);
      res.json(data);
   });
});
/**************/
driverController.delete('/deleteDriver/:id', function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("delete * from drivers where id=" + req.param.id, function (err, data) {
      //console.log(data);
      res.json(data);
   });
});
/**************/
driverController.post('/addDriver', function (req, res) {
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
driverController.post('/updateDriver', function (req, res) {
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

module.exports = driverController;