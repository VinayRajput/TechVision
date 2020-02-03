const topicModel = require('../model/topic');
const db = require('../utilities/dbConnect');
const fetchHandle = new db({ tableName: "topic" });
const updateHandle = db.extend({
   tableName: "topic",
});

exports.add = function (req, res) {
   record = new updateHandle({
      name: "Record Sample",
      price: 399.99,
      length: "30:00",
      weightage: 20
   });
   console.log(record);
   record.save(function (err, row) {
      if(err) throw err;
      res.json(row); 
   });
}

exports.getAllTopic = function (req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   fetchHandle.find('all', function (err, row, fields) {
      if (err) {
         res.json({ "msg": err });
         return;
      }
      res.json(row);
   })
}

const findById = (id) => {
   fetchHandle.find('all', { where: `id=${id}` }, function (err, row) {
      if (err) {
         res.json({ error: `Error Occurred: ${err}` })
      }
      else {
         if (!row) {
            var myerr = new Error('Record not found!');
            return next(myerr); // <---- pass it, not throw it
         }
         const json  = JSON.parse(JSON.stringify(row[0]));
         console.log('json',json);
         req.list(json);
         next();
         //return json;
      }
   })
}

exports.getTopicById = function (req, res) {
   fetchHandle.find('all', { where: `id=${req.params.id}` }, function (err, row) {
      res.json(row);
   })
}

exports.update = function (req, res) {
   record = new updateHandle({
      name: " Sample Record",
      price: 599.99,
      length: "60:00",
      weightage: 20
   });
   record.set({"id":6})
   record.save(function (err, row) {
      res.json(row);
   });
}

exports.delete = function (req, res) {

   fetchHandle.find('all', { where: `id=${req.params.id}` }, function (err, row) {
      console.log('row',row);
      if(!err){
         fetchHandle.set({id:req.params.id});
         fetchHandle.remove(function (err, row) {
            res.json(row);
         });
      } else {
         res.json({"noRecord":"No Record Found"});
      }
   })
}
