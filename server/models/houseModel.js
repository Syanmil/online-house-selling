var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var houseSchema = new Schema({	'title' : String,	'price' : Number,	'detail' : String,	'createdAt' : Date,	'image' : String,	'maps' : {lat: Number, lng: Number}});

module.exports = mongoose.model('house', houseSchema);
