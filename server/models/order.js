
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const orderSchema = Schema({
    quantity: {type: Number},
    status: Enumerator,
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

module.exports = model("Order", orderSchema);