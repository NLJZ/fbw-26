// Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number
emptySpace = str => {
  array = str.split("");
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == " ") {
      result++;
    }
  }
  let chars = array.length - result;
  console.log(chars);
};
emptySpace(" Hello, I am Nathan.");

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

taxCalc = (name, salary, ...args) => {
  let noKidsTax = salary * 0.55;
  let oneKidTax = salary * 0.3;
  let twoKidTax = salary * 0.25;
  let moreKidTax = salary * 0.2;
  let kidNum = args.length;
  let kidKids;
  if (kidNum == 1) {
    kidKids = "kid";
  } else {
    kidKids = "kids";
  }
  let takeHome;
  if (kidNum == 0) {
    takeHome = salary - noKidsTax;
  } else if (kidNum == 1) {
    takeHome = salary - oneKidTax;
  } else if (kidNum == 2) {
    takeHome = salary - twoKidTax;
  } else {
    takeHome = salary - moreKidTax;
  }
  console.log(
    `Hello ${name}, you have ${kidNum} ${kidKids}, so your take home salary (after taxes) is ${takeHome} euros.`
  );
};
taxCalc("Nathan", 2000, "Bob", "Jane");
taxCalc("Nathan", 2000);
taxCalc("Nathan", 1000, "Doug", "Jane", "Poppie", "Sally");

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number
phoneCheck = phone => {
  array = phone.split(" ");
  let numberGrab = 0;
  for (let i = 0; i < array.length; i++) {
    let num = Number(array[i]);
    checkNum = isNaN(num);
    if (!checkNum) {
      numberGrab = num;
    }
  }
  numberGrabString = numberGrab.toString();
  phoneFix = "0" + numberGrabString;
  phoneStart = phoneFix.slice(0, 3);
  if (phoneStart == "030" || phoneStart == "017") {
    if (phoneFix.length == 10) {
      console.log(
        `Looks like you've included a German phone number: ${phoneFix}`
      );
    } else {
      console.log(`Hmmm. Maybe you haven't included a German phone number...`);
    }
  } else {
    console.log(`Hmmm. Maybe you haven't included a German phone number...`);
  }
};
phoneCheck("0301234567");
phoneCheck("0301234567 I am stupid and enter my phone number with text");
phoneCheck("0171234567");
phoneCheck("017123456");
phoneCheck("5017123456");

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

germanBank = acct => {
  start = acct.slice(0, 2);
  end = acct.slice(2);
  num = Number(end);
  checkNum = isNaN(num);
  let validStart;
  let validEnd;
  if (start == "DE") {
    validStart = true;
  }
  if (!checkNum && end.length == 20) {
    validEnd = true;
  }
  if (validStart && validEnd) {
    console.log(`${acct} appears to be a German bank account number.`);
  } else {
    console.log(`${acct} does not appear to be a German bank account number.`);
  }
};

germanBank("DE1234567890");
germanBank("DE12345678901234567890");
germanBank("DE123456789012345678970");
germanBank("DE123456789012s4567890");
germanBank("DE1234567890123aaa67890");
