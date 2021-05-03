var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home', { title: 'a/A Express Skeleton Home', thing: res.locals.authenticated });
});

module.exports = router;
