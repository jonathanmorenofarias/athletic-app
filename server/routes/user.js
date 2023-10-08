const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

router.post('/register', async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 12)
    const user = new User ({
        username: req.body.username,
        email: req.body.email,
        password: hash
    })

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch (err) {
        res.status(400).json({ message: err.message });
    }
}); 


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).json("Wrong Username");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
            {
                id: user._id,
                username: user.username
            }, 
            process.env.ACCESS_TOKEN_SECRET
        );
        res.status(200).json(accessToken);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

function authenticateToken (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (token === null) return res.sendStatus(401)
    
    jwt.verify(token, proccess.env.ACCESS_TOKEN_SECRET, (err, user) => {
        
    })

}

module.exports = router;