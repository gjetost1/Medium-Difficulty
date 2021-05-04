const express = require('express');
const router = express.Router();
const { Story, Comment, StoryLike } = require('../db/models')
const { asyncHandler } = require('./utils')


router.get('/:id', asyncHandler(async (req, res, next) => {
    const story = await Story.findByPk(req.params.id);
    const currentUsersStory = false;
    if (story.author_id == res.locals.user) {
        currentUsersStory = true;
    };
    res.render('Stories', { story, currentUsersStory })
}))


router.get('/:id/Edit', asyncHandler(async (req, res, next) => { // TODO: Make sure 'Create-Story' has values for story.
    const story = await Story.findByPk(req.params.id);
    const edit = true;
    res.render('Create-Story', { story, edit })
}))


router.put('/:id', asyncHandler(async (req, res, next) => {
    const currentStory = await Story.findByPk(req.params.id);
    const { title, story } = req.body;

    currentStory.title = title;
    currentStory.story = story;

    await story.save();
    res.redirect(`/Stories/${story.id}`)
}))


router.delete('/:id', asyncHandler(async (req, res, next) => {
    const story = await Story.findByPk(req.params.id);
    await story.destroy()
    res.redirect('/')
}))


router.post('/:id/comment', asyncHandler(async (req, res, next) => {
    const { comment } = req.body

    await Comment.create({
        comment,
        user_id: res.locals.user.id,
        story_id: req.params.id
    })

    res.redirect(`/Stories/${req.params.id}`)
}))


router.delete('/:id/comment:cid', asyncHandler(async (req, res, next) => {
    const comment = await Comment.findByPk(req.params.cid);
    await comment.destroy();
    res.redirect(`/Stories/${req.params.id}`)
}))


router.post('/:id/likes', asyncHandler(async (req, res, next) => {  // TODO: Change the Likes number in the views, then it will update properly on next refresh.
    const like = await StoryLike.create({
        user_id: res.locals.user.id,
        story_id: req.params.id,
    })
}))


router.delete('/:id/likes:lid', asyncHandler(async (req, res, next) => {  // TODO: Change the Likes number in the views, then it will update properly on next refresh.
    const like = await StoryLike.findByPk(lid);
    await like.destroy();
}))


module.exports = router;
