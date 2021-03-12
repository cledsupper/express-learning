// É preferível utilizar o(s) handler de teste em indexController!

var mongoose = require('mongoose')
var mongoConfig = require('./config/mongo')

var Book = require('./models/book')

// Conexão com o MongoDB Atlas
mongoose.connect(mongoConfig.srv_address, {useNewUrlParser: true})
Book.countDocuments({}, function (err, count) {
    console.log('Número de documentos: ' + count)
})
