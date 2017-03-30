var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('https://instituto-do-sono-de-santos.reservio.com/');
});

module.exports = router;
