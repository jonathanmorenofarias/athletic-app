const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

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
    const user = await User.findOne({ username: req.body.username });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (validPassword) {
        res.status(200).json(user);
    } else
    
    res.status(400).json("user not found");
}); 

module.exports = router;