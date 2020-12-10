const Post = require('../models/post');
const fs = require('fs');

exports.createTextPost = (req, res, next) => {
    const post = new Post({
        username: req.body.post.username,
        department: req.body.post.department,
        title: req.body.post.title,
        postText: req.body.post.postText,
        commentsPosted: 0,
        usersCommented: req.body.post.usersCommented
    });
    post.save().then(
        () => {
            res.status(201).json({
                message: 'Post added to database successfully!'
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

exports.createMediaPost = (req, res, next) => {
    req.body.post = JSON.parse(req.body.post);
    const url = req.protocol + '://' + req.get('host');
    const post = new Post({
        username: req.body.post.username,
        department: req.body.post.department,
        mediaUrl: url + '/media/' + req.file.filename,
        title: req.body.post.title,
        commentsPosted: 0,
        usersCommented: req.body.post.usersCommented
    });
    post.save().then(
        () => {
            res.status(201).json({
                message: 'Post added to database successfully!'
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

exports.showAllPosts = (req, res, next) => {
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
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({
        _id:req.params.id
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
};

exports.countComment = (req, res, next) => {
    Post.findOne({_id: req.params.id}).then((post) => {
        post.usersCommented.push(req.body.userId);
        post.commentsPosted++;
        post.save().then(
            () => {
                res.status(200).json({
                    message: 'Comment added succesfully'
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