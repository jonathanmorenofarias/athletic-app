const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
        name:{
            type: String, required: true
        },
        type: {
            type: String, required: true
        },
        defaultImage: {
            type: String, required: true
        },
        price:{
            type: String, required: true
        },
        sold: {
            type: Number, default: 0
        },
        elements: [{
             variant: {
                type: String, required: true
            },
            image : {
                type: String, required: true
            }
        }],
        shortDesc:[{
            type: String, required: true
        }],
        longDesc:{
            type: String, required: true
        },
        reviews: [{   
            name: {
                type: String, required: true
            },
            rating: {
                type: Number, required: true
            },
            header: {
                type: String
            },
            body: {
                type: String
            },
            date: {
                type: Date, default: Date.now
            }
        }],
    }, {timestamps: true})

module.exports = mongoose.model('Item', itemSchema);