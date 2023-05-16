const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const animalsController = require('./controller/animalsController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/animals', animalsController);

module.exports = router