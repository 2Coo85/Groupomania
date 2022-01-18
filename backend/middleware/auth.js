const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {  
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, "newKey");
    const userId = decodedToken.userId;
    if (req.email && req.email !== email) {
      throw "Invalid Email!";
    } else {
      next();
    }
  } catch {
    res.status(401).json({ error: new Error("Invalid Request!") });
  }
};