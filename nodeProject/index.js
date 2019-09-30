const express = require('express');
const mysql=require('mysql');
const app = express();

var con = mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"",
      database:"TechVisionClass"
   });
   
   con.connect(function(err){
         if(err) throw err;
         console.log("connected to database");
   });

app.get('/',function(req,res){
      con.query("select * from classes",function(err,data){
            console.log(data);
            res.json(data);
         });
});
app.get('/add',function(req,res){
      con.query('insert into teacherseveshift(fname, lname, expertise) values("Jasmeeet","Singh","mai bhool gaya");',function(err,data){
            if(err)
                  console.log(err);
            console.log(data);            
            res.json(data);
      });
})


app.get('/update',function(req,res){
      con.query('update teacherseveshift set expertise="yadd haii-" where fname="Jasmeeet" ; ',function(err,data){
            if(err)
                  console.log(err);
            console.log(data);            
            res.json(data);
      });
})


app.get('/delete',function(req,res){
      con.query('delete from teacherseveshift where id=1;',function(err,data){
            if(err)
                  console.log(err);
            console.log(data);            
            res.json(data);
      });
})
app.listen(8080);

