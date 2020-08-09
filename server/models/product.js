const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = Schema({
    product_name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    sizes: [{type: Number}],
    colors: [{type: String}],
    image_urls: [{type: String, required: true}],
    quantity: {type: Number, required: true},
    brand: {type: String},
    category: { type: String, required: true },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review" 
    }],
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

module.exports = model("Product", productSchema);