// Nested scopes: Accessing outer global variables
var nice = true;
const outerFunction = (x, y) => {
  let big = true;

  console.log(big + " outerFunction");
  const innerFunction = num => {
    big = false;
    nice = false;
    console.log(big + " innerFunction");
    return num + 10;
  };
  return innerFunction(x) + innerFunction(y);
};

console.log(outerFunction(3, 4));
console.log(nice);

// closure
function fun() {
  var number = 10;
  return number + number;
}
console.log(fun());
//invoking == calling

const add = (() => {
  var counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

//closed self-invoked anonymous function
(function() {
  let x = 0;
  console.log("hi");
})();

// IIFE
// Immediately-invoked Function Expression
// two ways + passing paramter
const sum = ((x, y) => {
  return x + y;
})(4, 5);

console.log(sum);

// Loops practice

for (let i = 0; i <= 10; i++) {
  let result = i * 3;
  console.log(`${i} * 3 = ${result}`);
}

// If else practice
let num = 10;
if (num == 20) {
  console.log("20 is cool");
} else {
  console.log("not cool");
}
