/**
 * @author Samuel Des Cormiers
 * @date 2024/09/16
 * @description Route pour la page de facture
 * @version 1.0
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.table(req.body);
  res.render('facture', { title: 'Facture', post: req.body });
});

module.exports = router;


