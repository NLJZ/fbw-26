const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const app = express();
const port = 3000;
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

// to process the json data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// root req
app.get("/", (req, res) => {
  res.send("Welcome to our lowdb");
});

// db init
app.get("/new", (req, res) => {
  db.defaults({ articles: [], userName: {}, num: 1 }).write();
  res.send("new db initialized");
});
// adding new article
app.get("/add", (req, res) => {
  const id = req.query.id;
  const title = req.query.title;
  db.get("articles").push({ id: id, title: title }).write();
  res.send(`new data with id = ${id} and title = ${title}`);
});
// search for article
app.get("/find", (req, res) => {
  const idToFind = req.query.id;
  res.send(db.get("articles").find({ id: idToFind }).value());
});

// update

app.get("/update", (req, res) => {
  db.update("num", (n) => n + 1).write();
  const num = db.get("num").value();
  res.send(`num increased by 1, num is now ${num}`);
});

// user name

app.get("/user", (req, res) => {
  const name = req.query.name;
  db.set("user.name", name).write();
  res.send(`hey ${name}`);
});

// post method url https://website.com/login

//{
//    'email': 'myemailatmyemail.com',
//    'pass' : '000pass'
//}
app.post("/login", (req, res) => {
  const userName = req.body.email;
  const userPass = req.body.pass;
  if (userName === "Hadi" && userPass === "000pass") {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(401).send(`invalid username or password`);
  }
});

// remove
app.get("/delete", async (req, res) => {
  // to remove article
  // url /delete?title=something

  //   const title = req.query.title;
  //   await db.get("articles").remove({ title: title }).write();
  //   res.status(200).send(`Your ${title} has been removed`);

  // to remove property
  // url /delete
  db.unset("user.name").write();
  res.status(200).send("user.name has been removed");
});

app.get("/api", (req, res) => {
  res.status(200).json({ id: 1, cityName: "Berlin", country: "de" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
