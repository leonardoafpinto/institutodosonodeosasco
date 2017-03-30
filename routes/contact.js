var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contact', { path: req.path });
});

module.exports = router;
