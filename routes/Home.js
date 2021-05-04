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


//-----------------------------
router.get('/Settings', (req, res) => {
  res.send('Settings TODO')
})
router.get('/Bookmarks', (req, res) => {
  res.send('Bookmarks TODO')
})
router.get('/Help', (req, res) => {
  res.send('Help TODO')
})
//-----------------------------


module.exports = router;
