// 1. Multiply - Function Declaration
// Create a function that multiples a number by another number.
function multiplyIt(x, y) {
  let result = x * y;
  return result;
}
console.log(multiplyIt(9, 8));

// 2. Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.
const multiplyThem = function(x, y) {
  let result = x * y;
  return result;
};
console.log(multiplyThem(9, 8));

// 3. Multiply - Arrow Function
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const multiply = (x, y) => {
  let result = x * y;
  return result;
};
console.log(multiply(9, 8));

const multiplyYay = (x, y) => x * y;
console.log(multiplyYay(3, 4));

// 4. Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.

function remainder(x, y) {
  let result = x % y;
  return result;
}
console.log(remainder(9, 8));

const remainder2 = function(x, y) {
  let result = x % y;
  return result;
};
console.log(remainder2(9, 8));

const remainder3 = (x, y) => {
  let result = x % y;
  return result;
};
console.log(remainder3(5, 3));

// 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

const printValue = (x, y) => {
  if (typeof x == "number" && typeof y == "number") {
    // console.log(true);
    let result = 1;
    let values = "";
    for (let i = 0; i < y; i++) {
      result *= x;
      values += `${result}, `;
    }
    return values;
  } else {
    console.log("One of your vars is not a number");
  }
};

console.log(printValue(4, 5));
console.log(printValue(3, 6));

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value.
// Reassign the variable within the function and print “My favorite fruit is: x”.
let myFave = "banana";
const printFavoriteFruit = str => {
  myFave = "apple";
  console.log(`My favorite fruit is: ${myFave}`);
};

printFavoriteFruit();

// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters.
// The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function.
// Is this possible? Why/Why not? Comment your answer in the index.js file.

const exponent = (x, y) => {
  let result = Math.pow(x, y);
  return result;
};

function exponent2(statedNum, exponent) {
  let result = 0;
  let multi = statedNum * statedNum;
  for (let i = 0; i < exponent; i++) {
    result += multi;
  }
  return result;
}
console.log(exponent2(2, 5));

//No you cannot declare result outside of the function. It is a local variable within the function so it is not defined globally.

console.log(exponent(2, 4));
console.log(exponent(2, 5));

// Spread Syntax
console.log(exponent(3, 2));
let array = [1, 3, 45, 6];
let copyArray = [...array];
console.log(copyArray);

function sum(...args) {
  let array = args;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return `the sum is ${result}`;
}

console.log(sum(3, 4, 5));
console.log(sum(3, 4, 5, 8, 22, 3));

function howMany(...args) {
  let array = args;
  let result = array.length;
  console.log(result);
}

const howManyArgs = (...args) => console.log(args.length);
howManyArgs(5, 4);

howMany(2, 3, 4, 5);
howMany(2, 3, 4, 5, 9, 10);
howMany(6);
