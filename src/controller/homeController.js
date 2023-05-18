const router = require('express').Router();

const animalService = require('../services/animalServices');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/search', async (req, res) => {
    let animalText = req.query.search;

    let animal = await animalService.search(animalText);

    if (animal == undefined) {
        animal = await animalService.getAll();
    }

    console.log(animal);

    res.render('search', { animal })
})

module.exports = router;