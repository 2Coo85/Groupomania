const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/Comments');

router.post('/', commentCtrl.createComments);
router.get('/', commentCtrl.getAllComments);

module.exports = router;