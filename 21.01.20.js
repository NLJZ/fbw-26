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

//Reverse the string: “JavaScript”.
let x = ["JavaScript"];
