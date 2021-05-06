const express = require('express');
const { Result } = require('express-validator');
const router = express.Router();
const { Story, Comment, StoryLike, User } = require('../db/models')
const { asyncHandler } = require('./utils')

//Collection Resource
router.get('/', asyncHandler(async (req, res, next) => {
    const stories = await Story.findAll({
        include: { model: User },
        limit: 10
    })

    res.render('Stories', {
        stories,
        user: res.locals.user,
        title: 'MD - Stories'
    })
}))


//Single Resource
router.get('/:id', asyncHandler(async (req, res, next) => {
    const story = await Story.findByPk(req.params.id);
    const currentUsersStory = false;
    if (story.author_id == res.locals.user) {
        currentUsersStory = true;
    };

    let liked = await StoryLike.findOne({
        where: {
            user_id: res.locals.user.id,
            story_id: req.params.id
        }
    })
    let isLiked;
    if (liked) {
        isLiked = true;
    } else {
        isLiked = false;
    }

    res.render('Stories', {
        story,
        currentUsersStory,
        user: res.locals.user,
        title: `MD - ${story.title}`,
        isLiked,
        liked
    })
}))


router.get('/:id/Edit', asyncHandler(async (req, res, next) => { // TODO: Make sure 'Create-Story' has values for story.
    const story = await Story.findByPk(req.params.id);
    const edit = true;
    res.render('Create-Story', {
        story,
        edit,
        user: res.locals.user
    })
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
    const story = await Story.findByPk(req.params.id);
    story.liked += 1;
    await story.save()
    await StoryLike.create({
        user_id: res.locals.user.id,
        story_id: req.params.id,
    })
}))


router.put('/:id/dislike', asyncHandler(async (req, res, next) => {  // TODO: Change the Likes number in the views, then it will update properly on next refresh.
    const story = await Story.findByPk(req.params.id);
    story.liked -= 1;
    await story.save()
    const like = await StoryLike.findOne({
        where: {
            user_id: res.locals.user.id,
            story_id: req.params.id
        }
    })
    await like.destroy();
}))


module.exports = router;
