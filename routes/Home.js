const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { asyncHandler } = require('./utils')
const { User, Story} = require('../db/models')


router.get('/', asyncHandler(async (req, res, next) => {

  const stories = await Story.findAll({ include: User })

  stories.forEach(story => {
    storyText = story.story
    if (storyText.length > 100) {
      if (storyText[78] == ' ') {
        storyText = storyText.slice(0, 80) + '...'
      } else {
        storyText = storyText.slice(0, 79) + '...'
      }
    }
    story.storySnip = storyText
  })

  res.render('Home', {
    user: res.locals.user,
    stories,
    title: 'MD - Home'
  });
}));

router.post('/search', asyncHandler(async(req, res, next)=>{
  const {user} = req.body
  console.log(user, 'user')
  const users = await User.findAll({
    where: {
      username: { [Op.like]: `%${user}%`}
    }
  })
  if(users.length){
    res.render('Search',  {users})
  }
  else{
    res.render('SearchFail')
  }
}))

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
