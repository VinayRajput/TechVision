const express = require('express');
const mysql=require('mysql');
const app = express();

app.get('/',function(req,res){
   
var con = mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"",
      database:"TechVisionClass"
   });
   
   con.connect(function(err){
         if(err) throw err;
         console.log("connected to database");
         con.query("select * from classes",function(err,data){
            console.log(err);
            res.json(err);
         });
   });
});
 

app.get('add',function(req,res){

      con.query('insert into teacherseveshift values()')

})
app.listen(8080);

