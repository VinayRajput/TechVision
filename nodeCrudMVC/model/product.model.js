const mongoose = require('mongoose');
const Schema = mongoose.Schema

let Product = new Schema({
   name: { required: true, primary: true, type:String },
   qty: { require: true, type:Number }
})

module.exports = mongoose.model('Product',Product)