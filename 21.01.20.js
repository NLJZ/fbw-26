//our best friend
function display(str) {
  console.log(str);
}
display("HADI");

//Check if variable is an array.
const names = ["Orland", "Peter", "Elena", "Nathan"];
let x = 1;
console.log(Array.isArray(names));

//Check if an array includes something particular.
console.log(names.includes("Orland"));
//show where in the array an item is.
console.log(names.indexOf("Orland"));

//reverse order of list items
let rev = names.reverse();
console.log(typeof rev);
console.log(rev);

//join arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 3, 6];
let arrTotal = arr1.concat(arr2);
console.log(arrTotal);

//filter arrays into a new array
let result1 = names.filter(name => name.length == 5 || name.length > 6);
console.log(result1);

// returns first value
let result2 = names.find(name => name.length == 5);
let result22 = names.find(name => name[0] == "N");
console.log(result2);
console.log(result22);
console.log(typeof result2);

const intArray = [2, 3, 5, 6, 8];
let result3 = intArray.map(x => x + 1);
console.log(result3);

//Functions

function sum(x, y) {
  return x + y;
}
let fun = sum(5, 4); // function call
console.log(fun);

function div(x, y) {
  return x / y;
}
console.log(div(4, 3));

function age(x) {
  if (x == 30) {
    return "You are cool";
  } else {
    return "You are nice";
  }
}
console.log(age(20));
console.log(age(30));

const numbers = [1, 2, 3, 4, 5, 6, 10, 45, 60];
const numbers2 = [34, 56, 22, 33, 2, 5];
function arrBig(array) {
  let result = array.filter(num => num >= 5);
  return result;
}
console.log(arrBig(numbers));
console.log(arrBig(numbers2));

const namez = ["Bill", "Chad", "Pickles", "Star", "Freddie"];
function fourArrCharr(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 4) {
      result.push(array[i]);
    }
  }
  return result;
}

const namez2 = ["Doug", "Stan", "Louie", "Norm"];
console.log(fourArrCharr(namez2));
console.log(fourArrCharr(namez));

function dchr(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == "D") {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(dchr(namez2));

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function nameOfThatMonth(num) {
  switch (num) {
    case 1:
      result = monthNames[0];
      break;
    case 2:
      result = monthNames[1];
      break;
    case 3:
      result = monthNames[2];
      break;
    case 4:
      result = monthNames[3];
      break;
    case 5:
      result = monthNames[4];
      break;
    case 6:
      result = monthNames[5];
      break;
    case 7:
      result = monthNames[6];
      break;
    case 8:
      result = monthNames[7];
      break;
    case 9:
      result = monthNames[8];
      break;
    case 10:
      result = monthNames[9];
      break;
    case 11:
      result = monthNames[10];
      break;
    case 12:
      result = monthNames[11];
      break;
    default:
      result = `Enter a number 1 through 12`;
      break;
  }
  return result;
}

console.log(nameOfThatMonth(99));
console.log(nameOfThatMonth(7));

function nameOfThatMonthEasy(num) {
  if (num >= 1 && num <= 12) {
    result = monthNames[num - 1];
  } else {
    result = "Sorry that is not a month.";
  }
  return result;
}

console.log(nameOfThatMonthEasy(5));
console.log(nameOfThatMonthEasy(500));

function reverseArray(array) {
  let result = [];
  let strToArr = "";
  let revStr = "";
  for (i = 0; i < array.length; i++) {
    strToArr = array[i].split("");
    strToArr.reverse();
    revStr = strToArr.join("");
    result.push(revStr);
  }

  return result;
}

newNew = ["dogs", "horses", "dolphins"];
console.log(reverseArray(newNew));
console.log(newNew);

const str1 = "JavaScript";
let strToArr = str1.split("");
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);
