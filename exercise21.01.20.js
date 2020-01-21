//Make an array of your siblings’ names or your favorite movie characters’ names.
const siblings = ["Tonya", "Lisa", "Thomas", "Benjamin"];
console.log(siblings);
//Make an array of your parents’ names.
const parents = ["Barry", "Megan", "Bonnie"];
console.log(parents);
//Combine these two arrays.
const family = siblings.concat(parents);
console.log(family);
//Add your pets’ names.
family.push("Kiva");
family.push("Ralph");
console.log(family);
//Reverse the order of the array.
const family2 = family.reverse();
console.log(family2);
//Access one of your parents’ names.
console.log(family2.find(name => name == "Barry"));
//Update the name of one of your parents.
console.log(family2.indexOf("Barry"));
family2[4] = "Barry Johnson";
console.log(family2);

//Reverse the string: “JavaScript”.
let x = "JavaScript";
let y = x.split("");
console.log(y);
let revY = y.reverse();
console.log(revY);
let z = revY.join("");
console.log(z);

const str1 = "JavaScript";
let strToArr = str1.split("");
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);
