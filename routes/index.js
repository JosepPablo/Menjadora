var express = require('express');
var router = express.Router();

var menjadoraController = require('../controllers/menjadora_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Menjadora', { title: 'Menjadora' });
});

//router.get('/baixa', menjadoraController.mou);


module.exports = router;