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

exports.book_list = function(req, res, next) {
    Book.find({}, "title author")
        .populate("author")
        .exec(function(err, list_books) {
            if (err) return next(err)
            res.render('book_list', { title: 'Lista de livros', book_list: list_books })
        })
}

exports.book_detail = function(req, res, next) {

    async.parallel({
        book: function(callback) {
            Book.findById(req.params.id)
                .populate("author")
                .populate("genre")
                .exec(callback)
        },
        book_instance: function(callback) {
            BookInstance.find({ 'book': req.params.id })
                .exec(callback)
        }
    }, function(err, results) {
        if (err) return next(err)
        if (results.book == null) {
            var err = new Error('Livro não existe')
            err.status = 404
            return next(err)
        }
        res.render('book_detail', { title: results.book.title, book: results.book, book_instances: results.book_instance })
    })

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
