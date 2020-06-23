const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = Schema({
    content: {type: String, required: true},
    user: [{type: Schema.Types.ObjectId, ref: "User"}],
    post: [{type: Schema.Types.ObjectId, ref: "Post"}]
}, 
{
    timestamps: true
});

module.exports = model("Post", commentSchema);