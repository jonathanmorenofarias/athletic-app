const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

function createToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}

function authenticateToken (req, res, next) {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err){
                return res.status(403).json("Invalid Token")
            }
            req.user = user
            next()
        })
    }
    else {
        return res.status(401).json("You are not authenticated")
    }
}

module.exports = { createToken, authenticateToken };