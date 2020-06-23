
const express = require("express");
const router = express.Router()

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, OPTIONS, POST, GET, PATCH");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

router.use(express.static("./assets"))

module.exports = router;