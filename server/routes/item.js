const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

router.get('/category/topsellers', async (req, res) => {
    try {
        const topSellers = await Item.find().sort({sold: -1}).limit(4).select('name defaultImage price');
        res.status(200).json(topSellers);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }   
}); 

router.get('/:productID', async (req, res) => {
    const { productID } = req.params;
    try {
        const item = await Item.findById(productID);
        res.status(200).json(item);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/category/supplements', async (req, res) => {
    try {
        const supps = await Item.find();
        res.status(200).json(supps);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }   
});

router.post('/', async (req, res) => {
    const item = new Item ({
        name: req.body.name,
        defaultImage: req.body.defaultImage,
        price: req.body.price,
        sold: req.body.sold,
        type: req.body.type,
        shortDesc: req.body.shortDesc,
        longDesc: req.body.longDesc,
        reviews: req.body.reviews
    })

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    }catch (err) {
        res.status(400).json({ message: err.message });
    }
}); 

module.exports = router;