const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let randtoken = require('rand-token');

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                username: req.body.username,
                password: hash
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
    User.findOne({username: req.body.username}).then(
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
                    const token = jwt.sign(
                    randtoken.generate(16),
                    {expiresIn: '12h'});
                    res.status(200).json({
                        userId: user._id,
                        token: 'token'
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
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );
};

exports.updateUser = (req, res, next) => {
    let user = new User({_id: req.params._id});
    if (user) {
        req.body.user = JSON.parse(req.body.user);
        user = {
            username: req.body.user.username,
            department: req.body.user.department,
            phone: req.body.user.phone,
            email: req.body.user.email,
            name: req.body.user.name
        };
    } else {
        User.findOne({_id: req.params._id}).then(
            () => {
                user = {
                    username: req.body.username,
                    department: req.body.department,
                    phone: req.body.phone,
                    email: req.body.email,
                    name: req.body.name
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
    User.findOneAndDelete({username: req.body.username}).then(
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