const express = require('express');
const router = express.Router();

const auth = require;
const multer = require;

const postCtrl = require('../controllers/Post');

router.post('/', auth, multer, postCtrl.createMediaPost);
router.post('/', auth, postCtrl.createTextPost);
router.get('/', auth, postCtrl.showAllPosts);

module.exports = router;