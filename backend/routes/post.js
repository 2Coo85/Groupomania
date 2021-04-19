const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')
const multer = require('../middleware/multer_config');

const postCtrl = require('../controllers/Post');

router.get('/', auth, postCtrl.showAllPosts);
router.post('/', auth, multer, postCtrl.createPost);
router.post('/', auth, postCtrl.commentedPost)
router.get('/:id', auth, postCtrl.getOnePost);

module.exports = router;