const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const { User } = require('../db/models')


router.get('/', (req, res, next) => {
    delete req.session.auth;
    req.session.save(() => res.redirect("/"), {
        title: 'MD - Log Out'
    })
})

module.exports = router;
