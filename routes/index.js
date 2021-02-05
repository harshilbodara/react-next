const express = require("express");
const router = express.Router();

router.get("/shows",(req,res) => {
    res.end("Hello world");
})

module.exports = router;