
const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
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

        return `${prefix}${fullYear}${month}${day}-PRD-${rand}${time}${path.extname(file.originalname)}`;
}

const productStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        // fs.mkdir(dest, {recursive: true}, (err, path) => {
        //     console.log("path", path);
        // })
        // // const e =  await fs.exists(dest);
        // console.log("exists", e);
        cb(null, "./assets/images/products");
    },
    filename: (req, file, cb) => {        
        cb(null, fileName(file, "product-"));
    }
});

const productsMulter = multer({
    storage: productStorage
});

router.put("/api/uploads/products", productsMulter.array("productImages", 10), (req, res) => {
    if(!req.files) {
        const error = new Error("Failed to upload");
        throw error;
    }
    console.log(req.files);
    // form image url from the uploaded file
    const imageUrls = req.files.map(file => `/images/products/${file.filename}`);

    res.status(201).json({ data: {imageUrls, message: "post image uploaded."} });
});

module.exports = router;