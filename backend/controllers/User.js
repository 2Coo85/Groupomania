const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//let randtoken = require('random-token');

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                username: req.body.username,
                password: hash,
                department: req.body.department,
                email: req.body.email,
                phone: req.body.phone
            });
            user.save().then(
                () => {
                    res.status(201).json({
                        message: 'User registered successfully'
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
        
    );
};

exports.logIn = (req, res, next) => {
    User.findOne({email: req.body.email}).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not found')
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error("Incorrect password entered")
                        });
                    }
                    const authToken = jwt.sign({userId: user._id}, 
                    "newKey",
                    {expiresIn: '24h'});
                    res.status(200).json({
                        userId: user._id,
                        authToken: authToken,
                        user: user
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: new Error('first error')
                    });
                }
            );
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: new Error('second error')
            });
        }
    );
};

exports.updateUser = (req, res, next) => {
    let user = new User({_id: req.params._id});
    if (user) {
        req.body.user = JSON.parse(req.body.user);
        user = {
            department: req.body.user.department,
            email: req.body.user.email
        };
    } else {
        User.findOne({_id: req.params.id}).then(
            () => {
                user = {
                    department: req.body.department,
                    email: req.body.email
                };
                User.updateOne({_id: req.params.id}, user).then(
                    () => {
                        res.status(201).json({
                            message: 'Information updated successfully!'
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
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    }
};

exports.deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.body.id}).then(
        () => {
            res.status(200).json({
                message: 'User deleted'
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