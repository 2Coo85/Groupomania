const express = require('express');
const router = express.Router();

const userCtrls = require('../controllers/User');

router.post('/signup', userCtrls.signUp);
router.post('/login', userCtrls.logIn);
router.put('/:id', userCtrls.updateUser);
router.delete('/:id', userCtrls.deleteUser);

module.exports = router;