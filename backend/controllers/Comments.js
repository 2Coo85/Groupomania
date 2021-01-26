const Comment = require('../models/comments');

exports.createComments = (req, res, next) => {
    const comments = new Comment({
        username: req.body.comments.username,
        department: req.body.comments.department,
        commentText: req.body.comments.commentText
    });
    comments.save().then(
        () => {
            res.status(201).json({
                message: 'Comment added to successfully!'
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

exports.getAllComments = (req, res, next) => {
    Comment.find().then(
        (comments) => {
            res.status(200).json(comments);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
