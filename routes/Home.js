const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { User } = require('../db/models')

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {

  





  res.render('Home', { title: 'a/A Express Skeleton Home', user: res.locals.user });
}));

module.exports = router;
