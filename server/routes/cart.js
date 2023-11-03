const express = require('express');
const router = express.Router();

const Item = require('../models/Item');
const Cart = require('../models/Cart');

const { authenticateToken } = require('./authenticateToken');

router.get('/total', authenticateToken, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id });
        let total = 0;

        const promises = cart.items.map(async (item) => {
            const product = await Item.findById(item._id);
            total += product.price * item.quantity;
        });

        await Promise.all(promises);

        res.status(200).json(total);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/allitems', authenticateToken, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.user.id})

        const allitems = cart.items.map(async item => {
            const product = await Item.findById(item._id);
            const productImage = product.elements.find(element => {
                return element.variant === item.flavorChoice
            })
            return {
                itemID: item._id,
                name: product.name,
                quantity: item.quantity,
                flavorChoice: item.flavorChoice,
                image: productImage.image,
                size: item.size,
                price: product.price
            }
        })
        res.status(200).json(await Promise.all(allitems));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.put('/additem', authenticateToken, async (req, res) => {
    //check if they sent a size in req.body


    try {
        let query = { userId: req.user.id, "items._id": req.body._id, "items.flavorChoice": req.body.flavorChoice };
        if (req.body.size){
            query = { userId: req.user.id, "items._id": req.body._id, "items.flavorChoice": req.body.flavorChoice, "items.size": req.body.size };
        }
        
        const findCart = await Cart.findOne(query);

        if (findCart === null) {
            const cart = await Cart.findOneAndUpdate({userId: req.user.id}, {$push: {items: req.body}}, {new: true});
            return res.status(200).json(cart);
        }

        const update = { $inc: { "items.$.quantity": req.body.quantity } };
        const result = await Cart.updateOne(query, update);
        res.status(200).json(result);       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});    

router.delete('/removeitem', authenticateToken, async (req, res) => {
    try {
        let query = { userId: req.user.id};
        let update = { $pull: { items: { _id: req.body.itemID }, items: { flavorChoice: req.body.flavorChoice} } };
        const findCart = await Cart.updateOne(query, update);
        res.status(200).json(findCart);
    }   
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
