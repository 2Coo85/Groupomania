const Post = require('../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
    req.body.post = JSON.parse(req.body.post);
    const url = req.protocol + '://' + req.get('host');
    const post = new Post({
        userId: req.body.post.userId,
        username: req.body.post.username,
        imageUrl: url + '/images/' + req.file.filename,
        department: req.body.post.department,
        title: req.body.post.title,
        content: req.body.post.content,
        
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
        post.findOne({_id: req.params.id}).then(
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

exports.deletePost = (req, res, next) => {
    post.findOne({_id: req.params.id}).then(
        (post) => {
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink('images/' + filename, () => {
                post.deleteOne({_id: req.params.id}).then(
                    () => {
                        res.status(200).json({
                            message: 'Deleted!'
                        });
                    }
                ).catch(
                    (error) => {
                        res.status(400).json({
                            error: error
                        });
                    }
                );
            });
        }
    );  
};

exports.getAllPosts = (req, res, next) => {
    post.find().then(
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