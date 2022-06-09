var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hai Patar! Semangat ya, Tuhan berkati langkahmu! ^^' });
});

module.exports = router;
