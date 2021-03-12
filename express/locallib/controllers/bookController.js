var Book = require('../models/book')
var Author = require('../models/author')
var BookInstance = require('../models/bookInstance')
var Genre = require('../models/genre')

var async = require('async')

exports.index = function(req, res) {
    async.parallel({
      book_count: function(callback) {
        Book.countDocuments({}, callback) // contar todos os documentos da coleção
      },
      book_instance_count: function(callback) {
        BookInstance.countDocuments({}, callback)
      },
      book_instance_available_count: function(callback) {
        BookInstance.countDocuments({ status: "Disponível" }, callback)
      },
      author_count: function(callback) {
        Author.countDocuments({}, callback)
      },
      genre_count: function(callback) {
        Genre.countDocuments({}, callback)
      }
    }, function(err, results) {
      if (err) console.log(err)
      res.render('index', { title: 'Local Library Home', error: err, data: results })
    })
}

exports.book_list = function(req, res) {
    res.send('NÃO IMPLEMENTADO: book list')
}

exports.book_detail = function(req, res) {
    res.send('NÃO IMPLEMENTADO: book detail')
}

exports.book_create_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: book create GET')
}

exports.book_create_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: book create POST')
}

exports.book_update_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: book update GET')
}

exports.book_update_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: book update POST')
}

exports.book_delete_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: book delete GET')
}

exports.book_delete_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: book delete POST')
}
