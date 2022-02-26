const Post = require('../models/post');

exports.createPost = (req, res, next) => {
    //req.body.post = JSON.parse(req.body.post);
    const url = req.protocol + '://' + req.get('host');
    if (req.file || req.body.content == '') {
        const post = new Post({
            userId: req.body.userId,
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
            userId: req.body.userId,
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
                res.status(400).json({
                    error: error
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

exports.updatePost = (req, res, next) => {
    let post = new Post({_id: req.params._id});
    if (req.file) {
        const url = req.protocol + '://' + req.get('host');
        req.body.post = JSON.parse(req.body.post);
        post = {
            imageUrl: url + '/images/' + req.file.filename,
            department: req.body.post.department,
            content: req.body.post.content,
            title: req.body.post.title,
            username: req.body.post.username
        };
    } else {
        post.find({_id: req.params.id}).then(
            (postRes) => {
            post = {
                imageUrl: postRes.imageUrl,
                department: req.body.department,
                content: req.body.content,
                title: req.body.title,
                username: req.body.username
            };
            post.updateOne({_id: req.params.id}, post).then(
                () => {
                    res.status(201).json({
                        message: 'Post updated successfully!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );                                     
        }).catch(
            (error) => {
                res.status(404).json({
                    error: error
                });
            }
        );
    }
    post.updateOne({_id: req.params.id}, post).then(
        () => {
            res.status(201).json({
                message: 'Post updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}


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