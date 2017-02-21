const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

var app = express()

//Database
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log(`connected to Port ${process.env.PORT} At ${process.env.MONGODB_URI}`);
});

app.use(cors())

app.listen(process.env.PORT, function(){
  console.log('connected');
})
