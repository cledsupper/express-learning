var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog/');
});

var indexController = require('../controllers/indexController')

/* Testar códigos */
router.get('/test', indexController.test_get);

module.exports = router;
