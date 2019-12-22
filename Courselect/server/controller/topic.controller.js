const topicModel = require('../model/topic');
const db = require('../utilities/dbConnect');
const table = db.extend({
   tableName: "topic",
});
exports.add = function (req, res) {
   record = new table({
      name: "Record Sample",
      price: 399.99,
      length: "30:00",
      weightage: 20
   });
   console.log(record);
   record.save(function (err, row) {
      res.json(row);
   });

}

exports.getAllTopic = function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   table.find('all', function (err, row, fields) {
      if (err) {
         res.json({ "msg": err });
         return;
      }
      res.json(row);
   })
}

exports.getTopicById = function (req, res) {
   table.find('all', { where: `id=${req.params.id}` }, function (err, row) {
      res.json(row);
   })
}

exports.update = function (req, res) {
   res.json({ msg: "update Topic called" });
}

exports.delete = function (req, res) {
   res.json({ msg: "delete Topic called" });
}
