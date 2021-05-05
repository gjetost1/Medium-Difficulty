const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { User, Story, StoryLike } = require('../db/models')
const fetch = require('node-fetch')


/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  // const response = await fetch("http://localhost:8080/stories")
  // const stories = await response.json()
  //console.log(stories.stories)

  const stories = await Story.findAll({
    include: [{ model: User }, {model: StoryLike, include: [User]}],
    limit: 10
})
  // stories.array().map(async story=> {
  //     const likes = await StoryLike.findAll({
  //     where: {story_id:story.id }
  // })
  // story.likes=likes
  //return story;
  //});
/*
  * TODO: find out what data to send to the home page pug
*/
  res.render('Home', {
    title: 'a/A Express Skeleton Home',
    user: res.locals.user,
    thing: res.locals.authenticated,
    stories
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
