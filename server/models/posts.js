const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postsSchema = Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    likes: {type: Number, default: 0},
    imageUrls: [String],
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    contributors: [{type: Schema.Types.ObjectId, ref: "User"}],
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, 
{
    timestamps: true
});

module.exports = model("Post", postsSchema);