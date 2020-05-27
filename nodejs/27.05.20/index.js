// module exports
const fs = require("fs");
const math = require("./math.js");
let x = 5,
  y = 4;
console.log(`x + y = ${math.sum(x, y)}`);
console.log(`x - y = ${math.sub(x, y)}`);
console.log(`x * y = ${math.mult(x, y)}`);
console.log(`x / y = ${math.div(x, y)}`);

fs.copyFile("original.txt", "copyFromOg.text", (err) => {
  if (err) throw err;
  console.log("Done copying");
});

const data = fs.readFileSync("math.js");
console.log(data.toString());

fs.open("new.txt", "r", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
  console.log("done");
});
