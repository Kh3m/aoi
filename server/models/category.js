const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const categorySchema = Schema({
    type: {type: String, required: true},
    sub_types: {type: String, required: true},
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
}, {
    timestamps: true
});

module.exports = model("Category", categorySchema);