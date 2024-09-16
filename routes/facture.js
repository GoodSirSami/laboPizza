var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.table(req.body);
  res.render('facture', { title: 'Facture', post: req.body });
});

module.exports = router;


