const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const sessionRoute = require('./routes/session.routes');
const topicRoute = require('./routes/topic.router');
const auth = require('./routes/auth.routes')
const cors = require('cors')

/*
app.use(function(req,res,next){
   res.header("Access-Control-Allow-Origin","*");
   res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 */

app.use(cors());
app.use(bodyParser.json());


app.use('/session', sessionRoute);
app.use('/topic', topicRoute);
app.use('/auth', auth);
app.listen(8080, 'localhost');


