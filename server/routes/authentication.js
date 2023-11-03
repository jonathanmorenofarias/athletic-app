const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

const User = require('../models/User');
const Cart = require('../models/Cart');

const { createToken, authenticateToken } = require('./authenticateToken');

router.post('/register', async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 12)
    const user = new User ({
        username: req.body.username,
        email: req.body.email,
        password: hash
    })
    
    const cart = new Cart ({
        userId: user._id
    })

    try {
        const newUser = await user.save();
        const newCart = await cart.save();
        res.status(201).json(newUser);
    }catch (err) {
        res.status(400).json({ message: err.message });
    }
}); 



router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).json("User does not exist");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).json("Wrong Password");

        const accessToken = createToken
            ({
                id: user._id, 
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin
            });

        res.status(200).json(accessToken);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/accountinfo', authenticateToken, async (req, res) => {
    const user = {
        username: req.user.username,
        email: req.user.email,
    }

    res.status(200).json(user);

})


module.exports = router;