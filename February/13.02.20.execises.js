// Fido says...
// In the following code, we want fido to bark. Instead, we get an error. Why?
// Edit the code to make fido bark.
// the function was outside of the class. The function was named incorrectly.
class Dog {
  constructor(name) {
    this.name = name;
  }
  bark = function() {
    console.log(`${this.name} says woof`);
  };
}
let fido = new Dog("fido");
fido.bark();

// Month Name
// Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12).
// Throw an error if a user inputs an invalid number as an argument.
// Example
// getMonthName(15) -> Invalid Month Number!

getMonthName = month => {
  monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Nov",
    "Oct",
    "Dec"
  ];
  try {
    if (month > 12 || month < 1 || month % 1 != 0)
      throw "Invalid Month Number!";
  } catch (err) {
    console.log("Oops " + err);
  }
  let monthName = monthArray[month - 1];
  console.log(`The month is ${monthName}.`);
};

getMonthName(10);
getMonthName(2.2);
getMonthName(99);
getMonthName(9);

// Reverse
// Create a function that reverses a string.
//Throw a custom error if the user inputs another type as an argument.
// Example
// reverseString(2019) -> ERROR! This is not a string!

reverseString = str => {
  try {
    if (typeof str !== "string") throw "ERROR! This is not a string!";
  } catch (err) {
    console.log("oops " + err);
  }

  if (typeof str == "string") {
    let strArr = str.split("");
    let revArr = strArr.reverse();
    let revStr = revArr.join("");
    console.log(revStr);
  }
};

reverseString("hihihi");

reverseString("hihihi let's go");

reverseString(222);
