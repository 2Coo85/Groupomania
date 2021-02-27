const Post = require('../models/post');

exports.createPost = (req, res, next) => {
    //req.body.post = JSON.parse(req.body.post);
    const url = req.protocol + '://' + req.get('host');
    if (req.file) {
        const post = new Post({
            userId: req.body.userId,
            username: req.body.username,
            department: req.body.department,
            title: req.body.title,
            mediaUrl: url + '/media/' + req.file.filename
            //usersCommented: req.body.post.usersCommented
        });
        post.save().then(
            () => {
                res.status(201).json({
                    message: 'Post and media added to database successfully!'
                });
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        ); 
    } else {
        const post = new Post({
            userId: req.body.userId,
            username: req.body.username,
            department: req.body.department,
            title: req.body.title,
            postText: req.body.postText
            //usersCommented: req.body.post.usersCommented
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