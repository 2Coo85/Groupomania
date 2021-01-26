const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer_config');

const postCtrl = require('../controllers/Post');

router.get('/', auth, postCtrl.showAllPosts);
router.post('/', auth, postCtrl.createTextPost);
router.post('/', auth, multer, postCtrl.createMediaPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.get('/:id/comment', auth, multer, postCtrl.countComment);



module.exports = router;