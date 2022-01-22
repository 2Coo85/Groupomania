const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    try{
        const { username, department, phone, email, password } = req.body;
        
        if (!(username, department, phone, email, password)) {
            res.status(400).send("All fields required")
        }

        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        encodedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            username,
            department,
            phone,
            email: email.toLowerCase(),
            password: encodedPassword
        })

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            { expiresIn: '12h'}
        )

        user.token = token

        res.status(201).json(user)

    } catch (err) {
        console.log(err)
    }
    // bcrypt.hash(req.body.password, 10).then(
    //     (hash) => {
    //         const newUser = new User({
    //             username: req.body.username,
    //             department: req.body.department,
    //             phone: req.body.phone,
    //             email: req.body.email,
    //             password: hash
    //         });
    //         newUser.save().then(
    //             () => {
    //                 res.status(201).json({
    //                     message: 'New User registered successfully!'
    //                 });
    //             }
    //         ).catch(
    //             (error) => {
    //                 res.status(500).json({
    //                     error: error
    //                 });
    //             }
    //         );
    //     }
    // )
}

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email}).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not found!')
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid){
                        return res.status(401).json({
                            error: new Error('Incorrect password!')
                        });
                    }
                    const token = jwt.sign(
                    {userId: user._id},
                    'RANDOM_TOKEN_SECRET',
                    {expiresIn: '24h'});
                    res.status(200).json({
                        userId: user._id,
                        token: token
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
}