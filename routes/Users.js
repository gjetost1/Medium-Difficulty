const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { User, Follower, Like, Story, Comment } = require('../db/models')


router.get('/:id', asyncHandler(async (req, res, next) => {
    let currentUser = false;
    if (req.params.id == res.locals.user) {
        currentUser = true
    };
    const user = res.locals.user
    res.render('User', { user, currentUser }) //if currentUser is true, giev extra privlages
}));


router.post('/:id/follow', asyncHandler(async (req, res, next) => {
    await Follower.create({
        follower_userid: res.locals.user,
        following_userid: req.params.id,
    })
}))


router.delete('/:id/follow', async (req, res, next) => {
    await Follower.delete({
        where: {
            follower_userid: res.locals.user,
            following_userid: req.params.id,
        }
    })
})


module.exports = router;
