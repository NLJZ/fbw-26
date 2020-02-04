//Get Values. Create a function that returns an array of all values of an object’s properties.
//getObjectValues({
//choice1: "tea",
//choice2: "coffee",
//choice3: "milk"
//})
//Expected output:
//["tea", "coffee", "milk"]

getObjectValues = () => {
  array = [];
  var choices = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
    choice4: "juice"
  };
  array.push(
    choices.choice1,
    choices.choice2,
    choices.choice3,
    choices.choice4
  );
  return array;
};

console.log(getObjectValues());

getObjectValues2 = () => {
  array = [];
  var choices = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
    choice4: "juice"
  };

  console.log(Object.values(choices));
};

getObjectValues2();

// Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// Example
// let person = {
//  firstName: "Ali",
//  job: "painter",
//  age: 20,
//  city: "Berlin"
//}
// Example of Expected Output “Ali is a 20 year old  in Berlin”.

let person = {
  firstName: "Nathan",
  job: "artist",
  age: 39,
  city: "Berlin",
  bio: function() {
    return this.firstName + " is an " + this.job + " who lives in " + this.city;
  }
};

bio = person.bio();
console.log(bio);

//List Properties. Create a function that returns an array of properties of a javascript object.
//Example
let student = {
  name: "Mike",
  class: "4A",
  course: "English"
};

const propArray = () => {
  return Object.getOwnPropertyNames(student);
};

console.log(propArray(student));

//Expected output:
//["name", "class", "course"]

const countLetters2 = str => {
  let letterArray = str.split("");
  const letters = {};
  for (let i = 0; i < letterArray.length; i++) {}
};

countLetters("tree");

function countLetters(str) {
  let arr = str.split("");
  let result = {};
  function countOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        // ABC == B
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i]; // B
    result[currentChar] = countOccurrences(str, currentChar); // this is an inner function
  } // ABC , B
  // {
  //  A: 1
  //  B:
  // }
  return result;
}

console.log(countLetters("tree"));
