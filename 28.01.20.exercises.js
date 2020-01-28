// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".

lookInside = str => {
  if (str.includes("JavaScript")) {
    console.log("I know it's crazy ;)");
  } else {
    console.log("No JavaScript here!");
  }
};

lookInside("Yo yo JavaScript");

// Create a function that calculates the user age e.g. 2000 -> 20.
age = num => {
  let result = 2020 - num;
  console.log(`You are, or will be, ${result} years old this year.`);
};

age(1980);

// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.

month = str => {
  let fixStr = str.toLowerCase();
  const winter = ["january", "february", "december"];
  const spring = ["march", "april", "may"];
  const summer = ["june", "july", "august"];
  const autumn = ["september", "october", "november"];
  firstLetter = fixStr.slice(0, 1);
  firstUpper = firstLetter.toUpperCase();
  superFixStr = firstUpper + fixStr.slice(1);
  if (winter.includes(fixStr)) {
    console.log(`${superFixStr} is a Winter month.`);
  } else if (spring.includes(fixStr)) {
    console.log(`${superFixStr} is a month in Spring.`);
  } else if (summer.includes(fixStr)) {
    console.log(`${superFixStr} is a month in Summer.`);
  } else if (autumn.includes(fixStr)) {
    console.log(`${superFixStr} is a month in Autumn.`);
  } else {
    console.log(`${str} is not a month.`);
  }
};

month("january");

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

const wordCheck = (string, word) => {
  wordPart = word.slice(0, string.length);
  if (wordPart == string) {
    console.log(`True ${word} starts with ${string}.`);
  } else {
    console.log(`Nope ${word} doesn't start with ${string}.`);
  }
};

wordCheck("butt", "ttonbu");

// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofer = who => {
  if (typeof who !== "undefined") {
    return `Two for me and one for ${who}`;
  } else {
    return `Two for me and one for you`;
  }
};
console.log(twofer("Ali")); // -> "Two for me and one for Ali"
console.log(twofer()); // -> "Two for me and one for you"

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 8 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).

const exponent = (num, exp) => {
  let result = 1;
  if (typeof exp == "undefined") {
    exp = 2;
  }
  for (let i = 0; i < exp; i++) {
    result *= num;
  }
  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9
console.log(exponent(2, 4));
console.log(exponent(2));

// Create a function will calculate a student degrees for 6 subjects,
//if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

gradeCalc = (...args) => {
  sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  rawavg = sum / args.length;
  avg = rawavg.toFixed(2);
  if (avg > 90) {
    console.log(`${avg} percent is an A+`);
  } else if (avg > 85 && avg < 90) {
    console.log(`${avg} percent is an A`);
  } else if (avg >= 80 && avg <= 85) {
    console.log(`${avg} percent is a B`);
  } else if (avg >= 70 && avg < 80) {
    console.log(`${avg} percent is a C`);
  } else {
    console.log(`${avg} percent is an F`);
  }
};

gradeCalc(85, 50, 95, 70, 82, 88);

// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".

const userGreeting = (name, age, city, ...args) => {
  array = args;
  activities = array.join(", ");
  firstLetterName = name.slice(0, 1);
  restOfName = name.slice(1, name.length);
  firstLetterNameCap = firstLetterName.toUpperCase();
  nameFix = firstLetterNameCap + restOfName;
  firstLetterCity = city.slice(0, 1);
  restOfCity = city.slice(1, name.length);
  firstLetterCityCap = firstLetterCity.toUpperCase();
  cityFix = firstLetterCityCap + restOfCity;
  greeting = `Hi ${nameFix}! I see you are ${age} years old and live in ${cityFix}. You enjoy ${activities}!`;
  if (activities.includes("dance" || "party")) {
    console.log(greeting + " You are cool!");
  } else {
    console.log(greeting);
  }
};

userGreeting("nathan", 39, "berlin", "meditation", "reading", "dance");

// Count Occurrences. Create a function that accepts two arguments: a string and a letter.
//The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences(“this is a string”, “i”) ➞ 3

const countIt = (str, letter) => {
  array = str.split("");
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == letter) {
      sum++;
    }
  }
  if (sum !== 1) {
    console.log(`The letter ${letter} appears ${sum} times in the word ${str}`);
  } else {
    console.log(
      `The letter "${letter}" appears ${sum} time in the word "${str}"`
    );
  }
};

countIt("is", "i");

// Create a function which calculates how old a dog is in doggie years.
//The function should accept one argument that is the puppy’s age in human years.
//Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”

const doggieAge = years => {
  result = years * 7;
  console.log(`Your dog is ${result} years old in dog years!`);
};

doggieAge(5);

// A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favourite snack.
//The function should accept two arguments: age and amount per day.
//The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
//Bonus Accept floating point values for amount per day and round the result.
// i.e.
// calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”

lifetimeSupply = (age, amount) => {
  years = 80 - age;
  yearlyAmount = amount * 365;
  snack = Math.round(years * yearlyAmount);
  snackFix = snack.toLocaleString();
  console.log(
    `You will need ${snackFix} bars of chocolate (eating ${amount} a day) to last you til the age of 80`
  );
};

lifetimeSupply(25, 2);

// ie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:
// equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// equalSlices(8, 3, 2) ➞ true
// equalSlices(8, 3, 3) ➞ false
// equalSlices(24, 12, 2) ➞ true
const fairPie = (slices, people, want) => {
  if (people * want <= slices) {
    console.log(true);
  } else {
    console.log(false);
  }
};

fairPie(11, 5, 3); // false // 5 people x 3 slices each = 15 slices > 11 slices
fairPie(8, 3, 2); //true
fairPie(8, 3, 3); //➞ false
fairPie(24, 12, 2); // ➞ true

// XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// XO(“ooxx”) ➞ true
// XO(“xooxx”) ➞ false
// XO(“ooxXm”) ➞ true (case insensitive)
// XO(“zpzpzpp”) ➞ true (returns true if no x and o)
// XO(“zzoo”) ➞ false

const xo = str => {
  newStr = str.toLowerCase();
  array = newStr.split("");
  xsum = 0;
  osum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "x") {
      xsum++;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "o") {
      osum++;
    }
  }
  if (xsum == osum || xsum + sum == 0) {
    console.log(`true - same number of xs and os`);
  } else {
    console.log(false);
  }
};

xo("xxxooo");
xo("zzzzz");
xo("xxo");

// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

validateEmail = email => {
  period = email.slice(email.length - 4, email.length - 3);
  period2 = email.slice(email.length - 3, email.length - 2);
  array = email.split("");
  correctChars = array.includes("." && "@");
  whereisat = array.indexOf("@");
  whereisperiod = array.indexOf(".");
  let periodverify;
  if (period == "." || period2 == ".") {
    periodverify = true;
  }
  if (periodverify && correctChars && whereisat > 0 && whereisperiod > 0) {
    console.log(`This looks like it could be a valid email.`);
  } else {
    console.log(`Sorry, this doesn't look like a valid email.`);
  }
};
validateEmail("john@example.com");
validateEmail("@example.com");
validateEmail("john.smith@com");
validateEmail("john.smith@possom.de");
validateEmail("dogs@blast.pl");
validateEmail(".ogs@blast.pl");
