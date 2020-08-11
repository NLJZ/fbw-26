const express = require("express");
const router = express.Router();

// get home page
router.get("/", function (req, res, next) {
  res.render("Index");
});

module.exports = router;
