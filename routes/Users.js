const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')

const { User, Follower, Story } = require('../db/models')


// const { Follower, Story, User } = require('../db/models')

// //Collection Resource
// router.get('/stories', asyncHandler(async (req, res, next)=>{
//     let stories = await User.findAll({
//         include: {
//             model: Story,
//         },
//         where: {
//             id: res.locals.user.id,
//         },
//         limit: 10
//     })
//     stories = stories[0].Stories

//     const user = true;

//     res.render('Home', {stories, user})
// }))


router.get('/:id', asyncHandler(async (req, res, next) => {
    let currentUser = false;
    if (req.params.id == res.locals.user) {
        currentUser = true
    };

    let stories = await Story.findAll({where:{author_id:res.locals.user.id}})

    res.render('User', { user: res.locals.user, currentUser, stories, title: `MD - ${res.locals.user.username}` }) //if currentUser is true, giev extra privlages
}));


router.post('/:id/follow', asyncHandler(async (req, res, next) => {
    await Follower.create({
        follower_userid: res.locals.user.id,
        following_userid: req.params.id,
    })
}))


router.delete('/:id/follow', async (req, res, next) => {
    await Follower.delete({
        where: {
            follower_userid: res.locals.user.id,
            following_userid: req.params.id,
        }
    })
})


module.exports = router;
