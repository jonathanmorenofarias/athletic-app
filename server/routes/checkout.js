const express = require('express');
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_TOKEN)

const { authenticateToken } = require('./authenticateToken');
const Cart = require('../models/Cart');
const Item = require('../models/Item');

router.post ('/create-checkout-session', authenticateToken, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.user.id})

        const items = cart.items.map(async item => {
            const product = await Item.findById(item._id)
            const productImage = product.elements.find(element => {
                return element.variant === item.flavorChoice
            })
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.name,
                        description: item.flavorChoice,
                        images: [productImage.image]
                    },
                    unit_amount: product.price * 100,
                },
                quantity: item.quantity
            }
        })
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: await Promise.all(items),
            success_url: 'http://localhost:3000',
            cancel_url: 'http://localhost:3000'
        })
        res.json({ url: session.url });   
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;