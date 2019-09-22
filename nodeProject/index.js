const http=require('http');
const express = require('express');
const mysql=require('mysql');

const app = express();
// http.createServer(function(req,res){
//    res.json({"data":"hi"});
// }).listen(8080,function(){
//    console.log('server is running on port 8080');
// });

app.get('',function(req,res){
   
var con = mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"",
      database:"TechVisionClass"
   });
   
   app.connect(function(err){
         if(err) throw err;
         console.log("connected to database");
   });
   res.json();

})





