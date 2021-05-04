const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { Story } = require('../db/models')


router.get('/', async(req, res, next) => {
    res.render('Create-Story');
})


router.post('/', asyncHandler(async(req, res, next) => {
    const {title, story} = req.body

    const story = await Story.create({
        title,
        story,
        author_id: res.locals.user.id,
    })

    res.redirect(`/Stories/${story.id}`)
}))


module.exports = router;
