
const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const utils = require("../../lib/utils/api");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// models
const Profile = require("../../models/profile");
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
const avatarStorage = multer.diskStorage({
    filename: (req, file, cb) => {        
        cb(null, fileName(file, "avatar-"));
    },
    destination: (req, file, cb) => {
        cb(null, "./assets/images/uploads")
    }
});

const postsStorage = multer.diskStorage({
    filename: (req, file, cb) => {        
        cb(null, fileName(file, "post-"));
    },
    destination: (req, file, cb) => {
        cb(null, "./assets/images/posts");
    }
});

const postsMulter = multer({
    storage: postsStorage
});

const upload = multer({
    storage: avatarStorage
}).single("avatar");

router.put("/api/uploads/avatar", upload, async (req, res) => {
    // check if req.file is defined
    if(!req.file) {
        const err = new Error("Failed to upload file");
        return res.status(422).json({
            error: err,
            message: "no file - Avatar not updated"
        })
    }
    
    // form image url from the uploaded file
    let imageUrl = `/images/uploads/${req.file.filename}`;

    try {
        // find user by incoming id
        const user = await User.findById({_id: req.body.localId});
        // if no user 
        if(!user) {
            // remove the already uploaded file
            utils.removeFile(`./assets/${imageUrl}`)
            const error = new Error("Failed to upload file")
            return res.status(422).json({
                error,
                message: "Avatar not updated"
            });
        }
        // Find the profile that belongs to this user
        const profile = await Profile.findOne({user: ObjectId(user._id)})
        // If found
        if(profile) {
            // remove image from fs - replace the imaage with the incoming image
            utils.removeFile(`./assets/${profile.image_url}`)
            // Modify the below properties
            profile.image_url = imageUrl || profile.image_url
            profile.user = user
            // Save profile
            await profile.save()
        } else {
            // No profile found for user
            // Create profile
            const profile = new Profile({
                image_url: imageUrl, display_name: req.body.displayName || ""
            });
            profile.user = user; /*======== check this later ==========*/
            // Save profile
            const createdProfile = await profile.save();
            // Add profile to user
            user.profile = createdProfile;
            // Save user when profile edited
            await user.save();
        }

        // Save user if updated
        await user.save();
        // populated user's profile
        const populatedUser = await user.populate("profile").execPopulate();
        await user.save();

        res.status(201).json({ data: {imageUrl: populatedUser.profile.image_url, message: "Avatar updated"} });

    } catch(error) {
        console.log("Hey -- ", error)
    }

});

router.put("/api/uploads/posts", postsMulter.single("postImage"), (req, res) => {
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