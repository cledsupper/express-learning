var Author = require('../models/author')

// Mostrar lista de autores
exports.author_list = function(req, res, next) {

        Author.find()
            .sort([['family_name', 'ascending']])
            .exec(function (err, list_authors) {
                if (err) { return next(err); }

                res.render('author_list', { title: 'Lista de autores', author_list: list_authors })
            })
}

exports.author_detail = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Author detail')
}

exports.author_create_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Author create GET')
}

exports.author_create_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Author create POST')
}

exports.author_delete_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Author delete GET')
}

exports.author_delete_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Author delete POST')
}

exports.author_update_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Author update GET')
}

exports.author_update_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Author update POST')
}