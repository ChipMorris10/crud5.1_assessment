// var mongoose = require(mongoose-q)
// (require('mongoose'),{spread:true});


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Car = new Schema({
  make: String,
  model: String,
  color: String,
  year: Number,
  two_door: Boolean
});


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/cars');
module.exports = mongoose.model('cars', Car);
