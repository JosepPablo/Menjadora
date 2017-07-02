// GET /menjadora/moumanual

exports.moumanual = function(req, res) {
    res.render('moumanual', { POS: req.params.POS });
    // res.render('moumanual', { title: 'Moumanual' });
};