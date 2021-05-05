const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { User, Story, StoryLike } = require('../db/models')
const fetch = require('node-fetch')


/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {

  //   const stories = await Story.findAll({
  //     include: [{ model: User }, {model: StoryLike, include: [User]}],
  //     limit: 10
  // })

  res.render('Home', {
    title: 'a/A Express Skeleton Home',
    user: res.locals.user,
    thing: res.locals.authenticated,
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
