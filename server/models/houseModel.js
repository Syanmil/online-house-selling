var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var houseSchema = new Schema({

module.exports = mongoose.model('house', houseSchema);