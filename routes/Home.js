const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { User, Story, StoryLike } = require('../db/models')


/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {

  const stories = await Story.findAll({ include: User })

  stories.forEach(story => {
    storyText = story.story
    if (storyText.length > 100){
      if (storyText[97] == ' ') {
        storyText = storyText.slice(0, 97) + '...'
      } else {
        storyText = storyText.slice(0, 96) + '...'
      }

    }
    story.storySnip = storyText
  })
  // console.log(stories)
  res.render('Home', {
    user: res.locals.user,
    stories,
    title: 'MD - Home'
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
