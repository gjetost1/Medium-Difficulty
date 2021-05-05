const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { User } = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils')
const bcrypt = require('bcrypt');
const { loginUser } = require('../auth');


const userSignUpValidators = [
    check("username")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a value for Username")
      .isLength({ max: 20 })
      .withMessage("First Name must not be more than 20 characters long")
      .custom(username => {
        return User.findOne({where: {username}}).then(user => {
          if (user) {
            return Promise.reject('Username already in use')
          }
        })
      }),
    check("email")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a value for Email Address")
      .isLength({ max: 320 })
      .withMessage("Email Address must not be more than 255 characters long")
      .isEmail()
      .withMessage("Email Address is not a valid email")
      .custom(email => {
        return User.findOne({where: {email}}).then(user => {
            if (user) {
                return Promise.reject('Email Adress already in use');
            }
        })
      }),
    check("password")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a value for Password")
      .isLength({ max: 50 })
      .withMessage("Password must not be more than 50 characters long")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
      .withMessage(
        'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
      ),
    check("confirmPassword")
      .exists({ checkFalsy: true })
      .withMessage("Please provide a value for Confirm Password")
      .isLength({ max: 50 })
      .withMessage("Confirm Password must not be more than 50 characters long")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Confirm Password does not match Password");
        }
        return true;
      }),
  ];


router.get('/', csrfProtection, asyncHandler(async(req, res, next) => {
    res.render('Signup', {
        csrfToken: req.csrfToken(),
        title: 'MD - Sign Up'
    })
}))


router.post('/', userSignUpValidators, csrfProtection, asyncHandler(async(req, res, next) => {
    const {username, email, password} = req.body;

    const user = await User.build({
        username,
        email,
        profileImage: '/default_profile_pic.jpg'
    })

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const hashedPassword = await bcrypt.hash(password, 10)
        user.hashedPassword = hashedPassword;
        await user.save()
        loginUser(req, res, user);
        res.redirect('/')
    } else {
        const errors = validatorErrors.array().map(e=>e.msg)
        res.render('Signup', {
            username,
            email,
            csrfToken: req.csrfToken(),
            errors
        })
    }

}))


module.exports = router;
