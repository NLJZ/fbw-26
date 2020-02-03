// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.

hasMonth = str => {
  let result = "";
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november"
  ];
  let winter = months.slice(0, 3);
  let spring = months.slice(3, 6);
  let summer = months.slice(6, 9);
  let fall = months.slice(9, 12);
  let month;
  let season;
  let counter = 0;
  strArray = str.toLowerCase().split(" ");
  strArray.forEach(word => {
    if (months.includes(word)) {
      month = word;
      season = winter.includes(month)
        ? "Winter"
        : spring.includes(month)
        ? "Spring"
        : summer.includes(month)
        ? "Summer"
        : fall.includes(month)
        ? "Fall"
        : "Sorry";
      result += `${word} is in ${season}. `;
      counter++;
    }
  });
  if (counter == 0) {
    console.log(`No season.`);
  } else {
    console.log(result);
  }
};

hasMonth("eh june");

// Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number
const charCount = str => {
  let NewStr = str.split(" ").join("").length;
  console.log(NewStr);
};
charCount("dogs are my friend");
charCount("man boy");

// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

const emailCheck = str => {
  let atLocation = str.indexOf("@");
  let start = str.slice(0, atLocation);
  let end = str.slice(atLocation + 1);
  let endReverse = end
    .split("")
    .reverse()
    .join("");
  let periodLocation = endReverse.indexOf(".");
  let endValid =
    periodLocation > 0 && endReverse.length - periodLocation > 1 ? true : false;
  let noSpaces = str.includes(" ") ? false : true;
  let startValid = start.length > 0 ? true : false;
  if (startValid && endValid && noSpaces) {
    console.log(`${str} appears to be a valid email address.`);
  } else {
    console.log(`${str} does not appear to be a valid email address.`);
  }
};

emailCheck("johnson.nathan.lee@elephant.com");
emailCheck("doctor@gmx.de");
emailCheck("a@a.c");
emailCheck("@.");
emailCheck("do@.com");
emailCheck("@johnson.com");
emailCheck("dogs");

// Write a function will give the alphabetical order for a passed character
//  i.e.  A -> 1
// B -> 2

alphaOrder = str => {
  lowStr = str.toLowerCase();
  alphaArray = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(alphaArray.indexOf(lowStr) + 1);
};
alphaOrder("A");
alphaOrder("z");
alphaOrder("c");

alphaTry = str => {
  upperStr = str.toUpperCase();
  console.log(upperStr.charCodeAt(0) - 64);
};
alphaTry("A");
alphaTry("z");
alphaTry("c");
