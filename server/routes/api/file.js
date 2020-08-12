
const router = require("express").Router();
const mongoose = require("mongoose");
const multer = require("multer");
const GridFSStorage = require("multer-gridfs-storage");
const keys = require("../../config/keys");

const productStorage = new GridFSStorage({
    url: keys.MONGODB_URI,
    file: (req, file) => {
        return {
            filename: file.fieldname + "_" + new Date().getTime() + "_" + file.originalname,
            bucketName: file.fieldname
        }
    }
});

const productUploads = multer({ storage: productStorage });

router.put("/api/uploads/products", productUploads.array("products"), (req, res) => {
    if(!req.files) {
        const error = new Error("Failed to upload");
        throw error;
    }
    // form image url from the uploaded file
    const imageUrls = req.files.map(file => `/uploads/${file.filename}`);

    res.status(201).json({ data: {imageUrls, message: "post image uploaded."} });
});

// Serve image to client
router.get("/uploads/:filename", async (req, res) => {
    // "fieldname_time_originalname"
    // take only the fieldname which is the bucketName
    const bucketName = req.params.filename.split("_")[0];
    try {
        const collection = await mongoose.connection.db.collection(bucketName + ".files");
        const file = await collection.findOne({filename: req.params.filename});
        if(file) {
            const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
                bucketName
            });
            res.set("Content-Type", file.contentType);
            bucket.openDownloadStreamByName(file.filename)
            .pipe(res)
            .on("error", (error) => {
                res.status(500).json(error);
            })
            .on("finish", () => {
                console.log(`Done downloading ${file.filename}...`);
            });
        }
    } catch(err) {
        console.log(err);
        res.send({err});
    }
});

module.exports = router;