var BookInstance = require('../models/bookInstance');

// Mostrar lista de BookInstances.
exports.bookinstance_list = function(req, res) {
    res.send('NÃO IMPLEMENTADO: BookInstance list');
};

// Mostrar página de detalhe de um específico BookInstance.
exports.bookinstance_detail = function(req, res) {
    res.send('NÃO IMPLEMENTADO: BookInstance detail: ' + req.params.id);
};

// Mostrar formulário de criação de BookInstance via GET.
exports.bookinstance_create_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: BookInstance create GET');
};

// Realizar criação de BookInstance via POST.
exports.bookinstance_create_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: BookInstance create POST');
};

// Mostrar formulário de remoção de BookInstance via GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: BookInstance delete GET');
};

// Realizar remoção de BookInstance via POST.
exports.bookinstance_delete_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: BookInstance delete POST');
};

// Mostrar formulário de atualização de BookInstance via GET.
exports.bookinstance_update_get = function(req, res) {
    res.send('NÃO IMPLEMENTADO: BookInstance update GET');
};

// Realizar atualização de BookInstance via POST.
exports.bookinstance_update_post = function(req, res) {
    res.send('NÃO IMPLEMENTADO: BookInstance update POST');
};