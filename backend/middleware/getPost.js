const Post = require('../models/post');

module.exports = async (req, res, next) => {
    let post;
    try {
        post = await Post.findById(req.params._id);

        if (post == null) {
            return res.status(404).send({
                message: 'Post not found',
                post
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            messasge: error.message
        })
    }
    res.post = post
    next()

}

