const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postSchema = require('../controllers/posts')

router.get('/', auth, postSchema.getAllPosts);
router.post('/', auth, multer, postSchema.createPost);
router.get('/:id', auth, postSchema.getOnePost);
router.put('/:id', auth, multer, postSchema.updatePost);



module.exports = router;