const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { User, Follower, Story } = require('../db/models')


router.get('/:id', asyncHandler(async (req, res, next) => {
    let currentUser = false;
    if (res.locals.user) {
        if (req.params.id == res.locals.user.id) {
            currentUser = true
        };
    }


    const profileUser = await User.findByPk(req.params.id)

    const stories = await Story.findAll({
        where: {
            author_id: profileUser.id
        },
        include: User
    })

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

    const followers = await Follower.findAll({
        where: {
            following_user_id: profileUser.id
        },
        include: [{
            model: User, as: 'User'
        }]
    })

    const followerAmount = followers.length

    let isFollowing = false;
    if (res.locals.user) {
        if (await Follower.findOne({ where: { follower_user_id: res.locals.user.id, following_user_id: req.params.id } })) {
            isFollowing = true
        }
    }

    res.render('User', {
        user: res.locals.user,
        stories,
        title: `MD - ${profileUser.username}`,
        profileUser,
        currentUser,
        followers,
        followerAmount,
        isFollowing
    })
}));


router.post('/:id/follow', asyncHandler(async (req, res, next) => {
    await Follower.create({
        follower_user_id: res.locals.user.id,
        following_user_id: req.params.id,
    })
}))


router.delete('/:id/follow', async (req, res, next) => {
    const follow = await Follower.findOne({
        where: {
            follower_user_id: res.locals.user.id,
            following_user_id: req.params.id,
        }
    })
    follow.destroy()
})

router.post('/follow', asyncHandler(async (req, res, next) => {
    const { follower_id, following_id } = req.body
    await Follower.create({
        follower_user_id: follower_id,
        following_user_id: following_id
    })
    res.json({ success: 'true' })
}))

router.delete('/unfollow', asyncHandler(async (req, res, next) => {
    const { follower_id, following_id } = req.body
    const follower = await Follower.findOne({
        where: {
            follower_user_id: follower_id,
            following_user_id: following_id
        }
    })
    await follower.destroy();
    res.json({ success: 'true' })
}))

router.post('/followers', asyncHandler(async (req, res, next) => {
    const { user_id } = req.body
    const following = []

    const followersDB = await Follower.findAll({
        where: {
            follower_user_id: user_id
        }
    })

    followersDB.forEach(follower => {
        following.push(follower.following_user_id)
    })
    res.json({ following: following })
}))

module.exports = router;
