const mongoose = require("mongoose");
const product = require("./product");

const  { Schema, model } = mongoose;

const reviewSchema = Schema({
    body: { type: String },
    star: { type: Number },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }
});

module.exports = model("Review", reviewSchema)