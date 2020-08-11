const express = require("express");
const usersRouter = express.Router();

// users route
usersRouter.get("/users", (req, res, next) => {
  res.send("Users");
});

module.exports = usersRouter;
