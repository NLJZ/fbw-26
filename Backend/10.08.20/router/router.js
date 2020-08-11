const express = require("express");
const router = express.Router();

// root route
router.get("/", (req, res) => {
  res.send("Hey, this is the root.");
});

router.get("/about", (req, res) => {
  res.send("Hey, this is the about page.");
});

module.exports = router;
