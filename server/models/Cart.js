const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        userId:{type: String, required: true},
        items:[
            {
                _id:{type: String, required: true},
                quantity:{type: Number, default: 1},
                flavorChoice:{type: String, required: true},
                size:{type: String},
            }
        ]
    }, {timestamps: true}
)

module.exports = mongoose.model('Cart', cartSchema);