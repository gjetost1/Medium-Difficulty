const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { User } = require('../db/models')

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {

/*
  * TODO: find out what data to send to the home page pug
*/

  res.render('Home', {
    title: 'a/A Express Skeleton Home',
    user: res.locals.user,
    thing: res.locals.authenticated
  });
}));


//----------------------------- //log out user tester
router.post('/', (req,res,next)=>{
  delete req.session.auth;
  res.render('Home', {
    title: 'a/A Express Skeleton Home',
    user: undefined,
    thing: false
  })
})
//-----------------------------


module.exports = router;
