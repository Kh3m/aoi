const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    sizes: [{type: Number}],
    colors: [{type: String}],
    image_urls: [{type: String, required: true}],
    quantity: {type: Number, required: true},
    in_stock: {type: Boolean},
    feature: {type: String},
    material: {type: String},
    brands: {type: String},
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review" 
    }],
    category: {
        type: Schema.Types.ObjectId, 
        required: true,
        ref: "Category"
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }],
    carts: [{
        type: Schema.Types.ObjectId,
        ref: "Cart"
    }]
}, {
    timestamps: true
});

module.exports = model("User", productSchema);