longestWord = string => {
  strArray = string.split(" ");
  let lengths = strArray.map(word => word.length);
  longest =
    strArray[strArray.map(word => word.length).indexOf(Math.max(...lengths))];
  console.log(`The longest word is "${longest}"`);
};

longestWord("I am using map.");
longestWord("Dogs are great");

// Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// isWaldoHere("is there wal here ?") ➞ false isWaldoHere("I found you Waldo!") ➞ true isWaldoHere("is wally here?") ➞ false
// isWaldoHere("waldo is here") ➞ true

isWaldoHere = str => {
  str.toLowerCase().includes("waldo")
    ? console.log("waldo")
    : console.log("no waldo");
};

isWaldoHere("is there wal here ?");
isWaldoHere("I found you Waldo!");
isWaldoHere("is wally here?");
isWaldoHere("waldo is here");

//isPrime? Create a function that returns true if a number is prime and false if it's not.
//NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1.
//The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
