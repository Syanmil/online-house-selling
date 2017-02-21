var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var houseSchema = new Schema({	'title' : String,	'price' : String,	'detail' : String,	'createdAt' : Date,	'image' : String,	'maps' : String});

module.exports = mongoose.model('house', houseSchema);
