const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router");
const PORT = process.env.PORT || 3000;

app.use("/topics", router);
// app.use("/books", router);
// app.use("/users", router);

var whitelist = ["http://example1.com", "http://example2.com"];

app.use(cors(corsOptions));
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// app.get("/", (req, res) => {
//   res.send("Hey I am the root page");
// });

// app.get("/products/:id", (req, res) => {
//   res.json({ msg: "This is CORS-enabled for a Single Route" });
// });

// res.set

app.get("/", (req, res) => {
  // setting for the response
  res.set({
    "Content-Type": "application/json",
  });
  res.send("hi");
  res.end();
});

app.get(/.*look$/, (req, res) => {
  res.send("yo");
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
