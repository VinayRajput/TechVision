const express  = require('express');
const app = express();
const sessionRoute = require('./routes/session.routes');
const topicRoute = require('./routes/topic.router');

app.use(function(req,res,next){
   res.header("Access-Control-Allow-Origin","*");
   res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.use('/session', sessionRoute);
app.use('/topic', topicRoute);
app.listen(8080, 'localhost');


