const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('folder created')
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello world", err => {
//   if (err) throw err;
//   console.log('file written to...')

//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " I love node.js", err => {
//     if (err) throw err;
//     console.log('file written to...')
//   });
// });

// Read File
// fs.readFile(path.join(__dirname, '/test', "hello.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data)
// });

// Rename File
fs.rename(path.join(__dirname, '/test', "hello.txt"), path.join(__dirname, '/test', "helloworld.txt"), (err) => {
  if (err) throw err;
  console.log("file renamed")
});