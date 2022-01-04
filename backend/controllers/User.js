const db = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/dbConfig');
//const models = require('../models')
const User = db.user
const Op = db.Sequelize.Op

const authToken = user => {
    token = jwt.sign({userId: user.id}, "newKey", {expiresIn: '24h'})
    return { user, token }
}

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        () => {
            const user = {
                username: req.body.username,
                password: hash,
                department: req.body.department,
                email: req.body.email,
                phone: req.body.phone
            }
            User.create(user).then(
                (user) => {
                    console.log('User created')
                    res.status(200).json(authToken(user))
                }
            ).catch(
                (error) => {
                    res.status(404).json({
                        message: "User not created " + error
                    })
                }
            )
            // let sql = `INSERT INTO Users (username, department, email, phone, password) VALUES ('+req.body.username+', '+req.body.department+', '+req.body.email+', '+req.body.phone+', '+hash+')`
            // dbConfig.query( (sql), (err) => {
            //     User.create(user).then(
            //         () => {
            //             res.status(200).json({
            //                 message: "User created successfully",
            //                 data: null
            //             })
            //         }
            //     )
            // User.users.create({
            //     username: req.body.username,
            //     password: hash,
            //     department: req.body.department,
            //     email: req.body.email,
            //     phone: req.body.phone
            // })
            console.log(user)
                // if (err) {
                //     console.log(err)
                //     return res.status(500).json({
                //         message: 'Error has occured ' + err
                //     })
                // } 
                // res.status(201).json({
                //     message: 'User added successfully'
                // });
            //})
            .catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    ).catch(
        (error) => {
            res.status(501).json({
                message: "Error has occured" + error
            })
        }
    )
};

exports.logIn = (req, res, next) => {
    // let dbSql = `SELECT * FROM Users WHERE email =?`
    // dbConfig.query(dbSql, req.body.email, (error) => {
    //     bcrypt.compare(req.body.password, user.password).then(
    //         (valid) => {
    //             if (!valid) {
    //                 return res.status(401).json({
    //                     error, message: "Incorrect password entered"
    //                 });
    //             }
    //             const authToken = jwt.sign({userId: user.id}, 
    //             "newKey",
    //             {expiresIn: '24h'});
    //             res.status(200).json({
    //                 userId: user.id,
    //                 authToken: authToken,
    //                 user: user
    //             });
    //         }
    //     )
    // })
    User.findOne({
        email: req.body.email
    }).then(
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
                    const authToken = jwt.sign({userId: user.id}, 
                    "newKey",
                    {expiresIn: '24h'});
                    res.status(200).json({
                        userId: user.id,
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
            res.status(501).json({
                error: new Error('second error')
            });
        }
    );
};

exports.updateUser = (req, res, next) => {
    User.users.update({_id: req.params._id});
    if (user) {
        req.body.user = JSON.parse(req.body.user);
        user = {
            department: req.body.user.department,
            email: req.body.user.email
        };
    } else {
        User.users.update({_id: req.params.id}).then(
            () => {
                user = {
                    department: req.body.department,
                    email: req.body.email
                }
                User.users.update({_id: req.params.id}, user).then(
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
    User.users.deleteOne({_id: req.body.id}).then(
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