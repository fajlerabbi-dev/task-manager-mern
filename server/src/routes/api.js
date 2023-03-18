const express = require('express');
const { Registration } = require('../controllers/UsersController');
const router = express.Router();

router.post('/registration', Registration);

// module export
module.exports = router;

