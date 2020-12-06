const express = require('express');
const router = express.Router();

const userCtrls = require('../controllers/User');

router.post('/', userCtrls.signUp);
router.post('/', userCtrls.logIn);
router.put('/:username', userCtrls.updateUser);
router.delete('/:username', userCtrls.deleteUser);