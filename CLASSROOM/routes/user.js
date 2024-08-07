const express = require("express");
const router = express.Router();

// index - user
router.get("/", (req, res) => {
    res.send("GET for users");
});

// show - user
router.get("/:id", (req, res) => {
    res.send("GET for users id");
});

// post - user
router.post("/", (req, res) => {
    res.send("POST for users id");
});

// delete - user
router.delete("/:id", (req, res) => {
    res.send("DELETE for user id");
});

module.exports = router;