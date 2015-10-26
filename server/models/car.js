var mongoose = require(mongoose-q)
(require('mongoose'),{spread:true});

var Schema = mongoose.Schema;

var Car = new Schema({
  make: String,
  model: String,
  color: String,
  year: Number,
  two_door: Boolean
});



module.exports = mongoose.model('cars', Car);
