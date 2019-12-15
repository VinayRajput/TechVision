const sessionModel = require('../model/session');
exports.add = function(req, res){
   res.json({"msg":"add Session Called"})
}

exports.getAllSession = function(req, res){
   res.json({"msg":"get all Session Called"})
}

exports.getSessionById = function(req,res){
   res.json({msg:"get session by id called"});
}

exports.update = function(req,res){
   res.json({msg:"update session called"});
}

exports.delete = function(req,res){
   res.json({msg:"delete session called"});
}
