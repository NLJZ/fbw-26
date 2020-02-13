// 3 types of errors (compilation aka compiler fails to compile, runtime, logic)

// `try { ... } catch (e) { ... }`

// consol.log("Hi"); // typo error (no e in console.log)

// try --> to test a block of code
// catch --> to handle the error
// throw --> to create custom errors

// let userAge = 25;
// let userName = "";
// if (userAge == 25) {
//   console.log("something else");
// }

// // runtime error missing parts of the code
// try {
//   console.log("trying phase");
//   //cool();
//   if (userName == "") throw "Sorry something went wrong";
//   console.log("won't print this if there was an error before");
// } catch (err) {
//   console.log("Oops " + err);
// } finally {
//   console.log("This will always run!");
// }

function display() {
  console.log("Hi this is a cool function.");
}

for (let i = 0; i < 8; i++) {
  display();
}

(function manyTimeCallFunction(num) {
  display();
  if (num > 1) manyTimeCallFunction(num - 1);
})(8);

console.log("Hi I am JS");

// these two are delayed by 3 and 5 seconds
const timerPrint = setTimeout(() => console.log("Hi I am JS"), 3000);
const timerPrint2 = setTimeout(display, 5000);

clearTimeout(timerPrint2);
