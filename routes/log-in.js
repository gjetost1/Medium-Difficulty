const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt')
const { csrfProtection, asyncHandler } = require('./utils')
const { loginUser } = require('../auth.js')
const { check, validationResult } = require('express-validator');


const loginValidators = [
    check('userIdentification')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email Address / Username'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password'),
];


router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
    res.render('log-in', {
        csrfToken: req.csrfToken()
    });
}))


router.post('/', loginValidators, csrfProtection, asyncHandler(async (req, res, next) => {
    const { userIdentification, password } = req.body;

    let errors = [];
    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
        const user = await db.User.findOne({ where: { [Op.or]: [{ email: userIdentification }, { username: userIdentification }] } })
        if (user) {
            const matchPassword = await bcrypt.compare(user.hashedPassword, password);
            if (matchPassword) {
                loginUser(req, res, user);
                return res.redirect('/')
            }
        }
        errors.push('Login failed for the provided email address / username and password')
    } else {
        errors = validationErrors.array().map(err => err.msg)
    }



    res.render('/log-in', {
        userIdentification,
        errors,
        csrfToken: req.csrfToken()
    })

}))


module.exports = router;
