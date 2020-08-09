const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = Schema({
    email: {type: String, required: true},
    full_name: {type: String, required: true},
    password: {type: String, required: true, match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&.]).{8,}/},
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }],
    cart: {
        type: Schema.Types.ObjectId,
        ref: "Cart"
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

module.exports = model("User", userSchema);