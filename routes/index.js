var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'La pizza de la MAMA!' });
});
router.post('/', function(req, res, next) {
  console.table(req.body);
  
  res.render('index', { title: 'La pizza de la MAMA!' });
});
module.exports = router;
