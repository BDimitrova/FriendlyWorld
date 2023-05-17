const router = require('express').Router();
const animalService = require('../services/animalServices');

const { isAuth } = require('../middlewares/authMiddleware');

router.get('/dashboard', async (req, res) => {
    let animals = await animalService.getAll();
    console.log(animals);
    res.render('animals/dashboard', { animals })
});

router.get('/create', (req, res) => {
    res.render('animals/create')
});

router.post('/create', isAuth, async (req, res) => {
    try {
        await animalService.create({ ...req.body, owner: req.user._id });
        res.redirect('/animals/dashboard');
    } catch (error) {
        console.log(error);
        // res.render('crypto/create', { error: getErrorMessage(error) });
    }
});

module.exports = router;