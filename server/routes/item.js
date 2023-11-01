const express = require('express');
const router = express.Router();

const Item = require('../models/Item');


router.get('/category/query', async (req, res) => {
    const { name } = req.query;
    
    if(!name) return res.status(400).json({ message: 'Query not found' });

    try {
        const items = await Item.find({ name: { $regex: name, $options: 'i' } });
        res.status(200).json(items);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

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
        const supps = await Item.find({ type: "supplements"});
        res.status(200).json(supps);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }   
});

router.get('/category/apparel', async (req, res) => {
    try {
        const supps = await Item.find({ type: "apparel"});
        res.status(200).json(supps);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }     
});

router.get('/category/accessories', async (req, res) => {
    try {
        const supps = await Item.find({ type: "accessories"});
        res.status(200).json(supps);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }     
});

router.post('/', async (req, res) => {
    const item = new Item ({
        name: req.body.name,
        type: req.body.type,
        elements: req.body.elements,
        defaultImage: req.body.defaultImage,
        price: req.body.price,
        sold: req.body.sold,
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