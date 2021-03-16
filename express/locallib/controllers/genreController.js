var Genre = require('../models/genre');

// Mostrar lista de todos os Genre's.
exports.genre_list = function(req, res, next) {

    Genre.find()
        .sort([['name', 'ascending']])
        .exec(function(err, list_genres) {
            if (err) { return next(err); }
            res.render('genre_list', { title: 'Lista de gêneros', genre_list: list_genres });
        });
};

// Mostrar página de detalhe de um Genre.
exports.genre_detail = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Genre detail: ' + req.params.id);
};

// Mostrar formulário de criação de Genre via GET.
exports.genre_create_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Genre create GET');
};

// Realizar criação de Genre via POST.
exports.genre_create_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Genre create POST');
};

// Mostrar formulário de remoção de Genre via GET.
exports.genre_delete_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Genre delete GET');
};

// Realizar deleção de Genre via POST.
exports.genre_delete_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Genre delete POST');
};

// Mostrar atualização de Genre via GET.
exports.genre_update_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Genre update GET');
};

// Realizar atualização de Genre via POST.
exports.genre_update_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: Genre update POST');
};