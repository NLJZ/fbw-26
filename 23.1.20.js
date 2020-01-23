// var, let, const
var x = 0;
let y = "3";
y = 3;
const q = 10; //after semi-colon cannot change value
let sumInt = 0; //camel-case --  don't use snake case sum_in

// increment
let a = 0;
a++; // a = a + 1 or a += 1 (all work the same)

// decrement
a--; // a = a -1 or a -= 1 (all work the same)
let str = "Hi";

str += " how are you."; // += can add more to a string
console.log(str);

// function <name>(<paramters>) { ... }
function sum(x, y) {
  let z = x + y; // z is a local variable
  return z;
}
console.log(sum(4, 5)); // 4 = x, 5 = y

// variables in function
// local vs global
function fun() {
  const num = 10;
  const num2 = 20;
  return `Hi the sum is ${num + num2} \n I\'m \" `;
}
console.log(fun());

let string = "THIs is a long text.";
console.log(string[0]); // returns first character in string
console.log(string[1]); // returns second character in string
console.log(string.substring(0, 4)); // returns part of string as defined in ();
let newStr = string[0].toUpperCase() + string.substring(1).toLowerCase();
let newStr1 =
  string.substring(0, 2).toUpperCase() + string.substring(2).toLowerCase();
console.log(newStr);
console.log(newStr1);
const arr = [1, 2, 3, "Dogs"];
console.log(typeof arr); // use typeof to see what kind of object something is
let blue = true;
console.log(blue ? `Nice I like ${x} ${arr}` : "nooooo"); // ternary operator: returns true or false values
// should stick to " " or ``
if (1 < 10) {
  arr.push(1);
} else if (1 == 20) {
  arr.unshift(1);
} else {
  arr.push(2);
  a++;
}
console.log(arr);
let color = "Black";
switch (color) {
  case "Pink":
    arr.push(1);
    break;
  case "Black":
    console.log("Hi");
    break;
  default:
    a++;
    console.log(`This is not Okay`);
}

// const <function name> = (<paramters>) => { ... }
const div = (x, y) => {
  const you = () => {
    return 3;
  };
  return x / y;
};
console.log(div(5, 2));

const names = ["Dr. J", "Magic Johnson", "Michael Jordan", "Larry Bird"];
console.log(names.includes("Michael Jordan")); // Array.includes returns true or false
console.log(names.indexOf("Michael Jordan")); // Array.indexOf returns where in the array item is
names.push("Damian Lillard"); // adds item to end of an array
names.unshift("Mark Price"); // adds item to beginning of array
//names.shift(); // removes first item of an array
//names.pop(); //removes last item of an array;
console.log(names);

// Array.split()
const arr2 = ["Hi", "this", "is"];
const arr3 = ["me", "writing", "you"];
const arrTotal = arr2.concat(arr3); // joins two arrays
arrTotal.push("too");
console.log(arrTotal);
console.log(arrTotal.join(" ")); // change array to string

console.log(names.filter(name => name.length > 12));

let arrCall = names.find(name => name.length > 10);
console.log(arrCall);

// reverse();
const stringie = "JavaScript";
let newRevStr = stringie
  .split("")
  .reverse()
  .join("");
console.log(newRevStr);

function reverseIt(text) {
  let reversedString = text
    .split("")
    .reverse()
    .join("");
  return reversedString;
}

console.log(reverseIt("Chocolate"));
console.log(reverseIt("Kareem Abdoul Jabaar"));
