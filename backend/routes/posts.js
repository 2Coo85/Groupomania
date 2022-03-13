const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postSchema = require('../controllers/posts')

router.post('/', auth, multer, postSchema.createPost);
router.get('/', auth, postSchema.getAllPosts);
router.delete('/:_id', auth, postSchema.deletePost);
router.put('/:_id', auth, multer, postSchema.updatePost);
router.get('/:id', auth, postSchema.getOnePost);

module.exports = router;