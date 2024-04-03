 const express = require('express');
const router = express.Router();
const { signUp,login } = require('../Controllers/signUp_login.js');



router.post('/signup', signUp);
router.post('/login', login);

module.exports = router;



