const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Contact', {title: 'MD - Contact'})
})

module.exports = router;
