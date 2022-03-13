const Post = require('../models/post');
const { v4: uuidv4 } = require('uuid')
const getPost = require('../middleware/getPost')

exports.createPost = (req, res, next) => {
    //req.body.post = JSON.parse(req.body.post);
    const _id = uuidv4();
    const url = req.protocol + '://' + req.get('host');
    if (req.file || req.body.content == '') {
        const post = new Post({
            _id: _id,
            username: req.body.username,
            department: req.body.department,
            title: req.body.title,
            file: url + '/images/' + req.file.filename
        });
        post.save().then(
            () => {
                res.status(201).json({
                    message: 'New Post with image added to database successfully!'
                });
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );  
    } else if( req.body.content !== '') {
        const post = new Post({
            _id: _id,
            username: req.body.username,
            department: req.body.department,
            title: req.body.title,
            content: req.body.content
        });
        post.save().then(
            () => {
                res.status(201).json({
                    message: 'New Post added to database successfully!'
                });
            }
        ).catch(
            (error) => {
                res.status(401).json({
                    error: error.message
                });
            }
        );
    }
    
};


exports.getOnePost = (req, res, next) => {
    Post.findOne({
        _id: req.params.id
    })
    .then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.updatePost = async (req, res, next) => {
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
    if (req.body.content != null) {
        res.post.content = req.body.content;
    }
    const url = req.protocol + '://' + req.get('host');
    req.body.file = url + '/images/' + req.file.filename
    if (req.body.file != null) {
        res.post.file = req.body.file;
    }

    try { 
        const updatePost = await res.post.save()
        res.json(updatePost);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
    

    
}

exports.deletePost = getPost,  async (req, res, next) => {
    
    try {
        await res.post.deleteOne()
        res.json({
            messasge: 'Post has been deleted successfully', post: res.post
        })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

exports.getAllPosts = (req, res, next) => {
    Post.find().then(
        (posts) => {
            res.status(200).json(posts);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}