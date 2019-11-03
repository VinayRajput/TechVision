const productModel = require('../model/product.model');

exports.add = function (req, res) {

   // let model = productModel;
   // model.name = req.name;
   // model.qty = req.qty;
   // code too add prooduct to database


   res.json({ msg: "added" });
}

exports.update = function (req, res) {
   // let model = productModel;
   // model.name = req.name;
   // model.qty = req.qty;
   // code too add update to database

   res.json({ msg: "updated" });

}