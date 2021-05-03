const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { User } = require('../db/models')

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  let user;
  if (res.locals.authenticated) {
    user = res.locals.user;
  }
  res.render('Home', { title: 'a/A Express Skeleton Home', user });
}));

module.exports = router;
