const database = require('../models/comments')

exports.createComments = (req, res, next) => {
    database.comments.create({
        username: req.body.username,
        department: req.body.department,
        commentText: req.body.commentText,
        postId: req.body.postId
    }).then(
        () => {
            res.status(201).json({
                message: 'Comment added successfully'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                message: 'Comment not created',
                error: error
            });
        }
    );
}

exports.getAllComments = (req, res, next) => {
    database.comments.find({
        postId:req.params.id
    }).then(
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
