const jwt = require('jsonwebtoken');

const config = process.env

// const tokenVerified = (req, res, next) => {
//     const token = req.body.token || req.query.token || req.headers.authorization.split(' ')[1]

//     if (!token) {
//         return res.status(403).send("Token required for authorization")
//     }
//     try {
//         const decoded = jwt.verify(token, config.TOKEN_KEY)
//         req.user = decoded
//     } catch (error) {
//         return res.status(401).send("invaild token")
//     }
//     return next()
// }

// module.exports = tokenVerified

module.exports = (req, res, next) => {
    const authToken = req.headers.authorization;
    if (authToken && authToken !==  null) {
        try {
            const decodedToken = authToken.split(" ")
            req.user = jwt.verify(decodedToken[1], config.TOKEN_KEY)
            // if (req.body.user_id && req.body.user_id !== user_id) {
            //     throw 'Invalid user ID';
            // } else {
            //     next();
            // }
        } catch {
            res.status(401).json('Invalid token detected!')}
    } else {
        req.user = {}
    }

    next();
    
};