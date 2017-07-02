var express = require('express');
var router = express.Router();

var menjadoraController = require('../controllers/menjadora_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Menjadora', { title: 'Menjadora' });
});
/* GET Menjadora page. */
router.get('/Menjadora', function(req, res, next) {
    res.render('Menjadora', { title: 'Menjadora' });
});

/* GET moumanual page. */
//router.get('/moumanual', function(req, res, next) {
//    res.render('moumanual', { title: 'Moumanual' });
//});
router.get('/moumanual/:POS(\\d+)', menjadoraController.moumanual);
//router.get('/moumanual/:POS(\\d+)','192.168.1.80/POS=60');



module.exports = router;