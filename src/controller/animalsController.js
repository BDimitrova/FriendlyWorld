const router = require('express').Router();

router.get('/dashboard', (req, res) => {
    res.render('animals/dashboard')
});

module.exports = router;