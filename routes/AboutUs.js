const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('AboutUs', {title: 'MD - About Us'})
})

module.exports = router;
