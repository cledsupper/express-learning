var BookInstance = require('../models/bookInstance');

// Mostrar lista de BookInstances.
exports.bookinstance_list = function(req, res, next) {

    BookInstance.find()
        .populate('book')
        .exec(function(err, list_bookinstances) {
            if (err) { return next(err); }

            res.render('bookinstance_list', { title: 'Lista de cópias', bookinstance_list: list_bookinstances });
        });

};

// Mostrar página de detalhe de um específico BookInstance.
exports.bookinstance_detail = function(req, res, next) {

    BookInstance.findById(req.params.id)
        .populate('book')
        .exec(function(err, book_instance) {
            if (err) return next(err);
            if (book_instance == null) {
                var err = new Error('Cópia não existe');
                err.status = 404;
                return next(err);
            }
            res.render('bookinstance_detail', { title: 'Cópia de: ' + book_instance.book.title, book_instance: book_instance});
        });

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
