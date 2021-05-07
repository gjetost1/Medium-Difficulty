const express = require('express');
const { Result } = require('express-validator');
const router = express.Router();
const { Story, Comment, StoryLike, User } = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils')

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
    let currentUsersStory = false;

    if (story.author_id == res.locals.user.id) {
        currentUsersStory = true;
    };
    let liked;
    if (res.locals.user) {
        liked = await StoryLike.findOne({
            where: {
                user_id: res.locals.user.id,
                story_id: req.params.id
            }
        })
    }

    let isLiked;
    if (liked) {
        isLiked = true;
    } else {
        isLiked = false;
    }

    const comments = await Comment.findAll({
        where: {
            story_id: req.params.id
        },
        include: User,
        order: [
            ['createdAt', 'ASC']
        ]
    })

    comments.forEach(comment => {
        let c = comment.createdAt.toString().split(':')[0]
        c = c.slice(0, (c.length - 2))
        comment.createdAtz = c
        if (res.locals.user) {
            if (comment.user_id == res.locals.user.id) {
                comment.mine = true;
            }
        }

    })

    let loggedIn = false;
    if(res.locals.user) {
        loggedIn = true
    }

    res.render('Stories', {
        story,
        currentUsersStory,
        user: res.locals.user,
        title: `MD - ${story.title}`,
        isLiked,
        liked,
        comments,
        loggedIn
    })
}))


router.get('/:id/Edit', asyncHandler(async (req, res, next) => { // TODO: Make sure 'Create-Story' has values for story.
    const story = await Story.findByPk(req.params.id);
    const edit = true;
    let permission = false;
    if (story.author_id == res.locals.user.id) {
        permission = true
    }
    res.render('Create-Story', {
        story,
        edit,
        permission,
        user: res.locals.user
    })
}))


router.post('/:id', asyncHandler(async (req, res, next) => {
    const currentStory = await Story.findByPk(req.params.id);
    const { title, story } = req.body;

    await currentStory.update({title: title, story: story})

    await currentStory.save();
    res.redirect(`/Stories/${currentStory.id}`)
}))


router.delete('/Delete/:id', asyncHandler(async (req, res, next) => {
    const story = await Story.findByPk(req.params.id);
    await story.destroy();
    res.redirect('/');
}))


router.post('/:id/comment', asyncHandler(async (req, res, next) => {
    const { comment } = req.body
    await Comment.create({
        comment,
        user_id: res.locals.user.id,
        story_id: req.params.id,
        edited: false,
        liked: 0
    })

    res.redirect(`/Stories/${req.params.id}`)
}))


router.delete('/:id/deleteComment/:cid', asyncHandler(async (req, res, next) => {
    const comment = await Comment.findByPk(req.params.cid);
    await comment.destroy();
    res.redirect(`/Stories/${req.params.id}`)
}))


router.post('/:id/likes', asyncHandler(async (req, res, next) => {
    const story = await Story.findByPk(req.params.id);
    story.liked += 1;
    await story.save()
    await StoryLike.create({
        user_id: res.locals.user.id,
        story_id: req.params.id,
    })
}))


router.put('/:id/dislike', asyncHandler(async (req, res, next) => {
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
