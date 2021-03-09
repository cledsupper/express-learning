var mongoose = require('mongoose')
var mongoConfig = require('./config/mongo')

// Conexão com o MongoDB Atlas
mongoose.connect(mongoConfig.srv_adress, {useNewUrlParser: true})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))