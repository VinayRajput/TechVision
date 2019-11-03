const express = require('express');
const productRouter = require('./route/product.route');
const app = express();

app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin','*');
   res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
   next();
});
app.use('/product',productRouter);
app.listen(8080,'localhost');