const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const profileSchema = Schema({
    display_name: {type: String},
    image_url: {type: String},
    user: {type: Schema.Types.ObjectId, ref: "User"}
});

module.exports = model("Profile", profileSchema);