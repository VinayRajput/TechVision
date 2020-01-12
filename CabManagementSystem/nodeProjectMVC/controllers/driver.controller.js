let driverController = {};
const con = require('../configs/connection');

//driverController.get('/getDrivers', function (req, res) {
driverController.getDrivers = function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from drivers", function (err, data) {
      res.json(data);
   });
};
/**************/
//driverController.get('/getDriver/:id', function (req, res,id) {
driverController.getDriverById = function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("select * from drivers where id=" + req.param.id, function (err, data) {
      res.json(data);
   });
};
/**************/
//driverController.delete('/deleteDriver/:id', function (req, res) {
driverController.deleteDriver = function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   con.query("delete * from drivers where id=" + req.param.id, function (err, data) {
      res.json(data);
   });
};
/**************/
//driverController.post('/addDriver', function (req, res) {
driverController.addDriver = function (req, res) {
   const queryString = `insert into drivers(license, dob, name) values("${req.body.license}","${req.body.dob}","${req.body.name}")`;

   con.query(queryString, function (err, data) {
      if (err) {
         res.json({ error: 'error occurred: ' + err });
      } else {
         res.send(data);
      }
   });
}
/**************/
//driverController.post('/updateDriver', function (req, res) {
driverController.updateDriver =   function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   if (req.files !== null) {
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
}
/**************/

module.exports = driverController;