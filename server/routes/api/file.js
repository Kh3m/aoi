
const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const utils = require("../../lib/utils/api");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// models
const User = require("../../models/user");

const fileName = (file, prefix) => {
    const d = new Date();
        const fullYear = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();
        const time = d.getTime();
        const rand = Math.floor(Math.random() * 10000000);

        return `${prefix}${fullYear}${month}${day}-STD-${rand}${time}${path.extname(file.originalname)}`;
}

const productStorage = multer.diskStorage({
    filename: (req, file, cb) => {        
        cb(null, fileName(file, "post-"));
    },
    destination: (req, file, cb) => {
        cb(null, "./assets/images/posts");
    }
});

const productsMulter = multer({
    storage: productStorage
});

router.put("/api/uploads/products", productsMulter.single("postImage"), (req, res) => {
    if(!req.file) {
        const error = new Error("Failed to upload");
        throw error;
    }

    // form image url from the uploaded file
    const imageUrl = `/images/posts/${req.file.filename}`;
    res.status(201)
    .json({ data: {imageUrl, message: "post image uploaded."} });
});

module.exports = router;