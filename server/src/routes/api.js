const express = require('express');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');
const {
  Registration,
  Login,
  UserProfile,
} = require('../controllers/UsersController');
const router = express.Router();

router.post('/registration', Registration);
router.post('/login', Login);
router.post('/user-profile', AuthVerifyMiddleware, UserProfile);

// module export
module.exports = router;
