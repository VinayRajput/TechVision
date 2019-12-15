const topicModel = require('../model/topic');
exports.add = function(req, res){
   res.json({"msg":"add Topic Called"})
}

exports.getAllTopic = function(req, res){
   res.json({"msg":"get all Topic Called"})
}

exports.getTopicById = function(req,res){
   res.json({msg:"get Topic by id called"});
}

exports.update = function(req,res){
   res.json({msg:"update Topic called"});
}

exports.delete = function(req,res){
   res.json({msg:"delete Topic called"});
}
