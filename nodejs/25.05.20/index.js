// NodeJs

// console.log(process);
// console.log(process.argv);
// console.log(`Hey ${process.argv[2]}`);

// process.argv.forEach((item, i) => {
//   console.log(`${i} : ${item}`);
// });

const args = process.argv.slice(2);
console.log(args);
console.log(`Hey ${args[0]}`);

const fs = require("fs");
// read file
fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
// write file
fs.writeFile("new.txt", "This is created file in NodeJs", (err) => {
  if (err) throw err;
  console.log("Done");
});
console.log("Hi this is too fun");
