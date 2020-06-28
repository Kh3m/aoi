const mongoose = require("mongoose");

const  { Schema, model } = mongoose;

const cartSchema = Schema({
    quantity: Number,
    price: Number,
    products: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }
});