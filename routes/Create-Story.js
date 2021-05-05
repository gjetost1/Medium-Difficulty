const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { Story } = require('../db/models')



router.get('/', async(req, res, next) => {
    res.render('Create-Story', {user: res.locals.user, title: 'MD - Create Story'});
})


router.post('/', asyncHandler(async(req, res, next) => {
    const {title, story} = req.body

    const currentStory = await Story.create({
        title,
        story,
        author_id: res.locals.user.id,
        liked: 0,
        views: 0
    })

    res.redirect(`/Stories/${currentStory.id}`)
}))


module.exports = router;
