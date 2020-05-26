const fs = require("fs");
const args = process.argv.slice(2);

function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number`);
    process.exit();
  }
  return number;
}

function sum(numArray) {
  return numArray.reduce((sum, num) => sum + num, 0);
}

function avg(numArray) {
  return sum(numArray) / numArray.length;
}
// const [operation, ...rest] = args;

// const numbers = rest.map(parseNum);
// // sum 3 5 6 kfjfl

// switch (operation) {
//   case "sum":
//     console.log(sum(numbers));
//     break;
//   case "avg":
//     console.log(avg(numbers));
//     break;
//   case "mid":
//     console.log(mid(numbers));
//     break;
//   default:
//     console.log("I cannot do this. please type 'sum' or 'avg' to calculate ");
// }

fs.writeFile("./text/new.txt", "This is text done by NodeJs.", err => {
  if (err) throw err;
  console.log("Done.");
});

fs.appendFile("new2.txt", "Second text file", err => {
  if (err) throw err;
  console.log("Done again");
});

fs.readFile("./longText.txt", "utf8", function(err, data) {
  if (err) throw err;
  console.log(data);
});

// rename file
// fs.rename("./text/hello.txt", "./text/hi.txt", err => {
//   if (err) throw err;
//   console.log("changed.");
// });

// delete file
fs.unlink("./text/hi.txt", err => {
  if (err) throw err;
  console.log("deleted");
});
