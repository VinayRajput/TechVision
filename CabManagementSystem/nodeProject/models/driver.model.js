const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let driver = new Schema({
   id: { required: true, type: Number, primary: true },
   license: { type: String, required: true },
   dob: { type: Date, required: true },
   photo: { type: longblob, required: false },
   documents: { type: longblob, required: false },
   name: { type: String, required: true }
})