require("dotenv").config;
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

const posts = [
  {
    accountOwner: "Nathan",
    accountBalance: "1000",
  },
  {
    accountOwner: "Orland",
    accountBalance: "9000",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/returnJWTtoken", (req, res) => {
  const accountOwner = req.body.accountOwner;
  const user = { name: accountOwner };
  const accessToken = jwt.sign(user, process.env.SECRET_ACCESS_TOKEN);
  res.json({ accessToken: accessToken });
});

app.listen(5500);
