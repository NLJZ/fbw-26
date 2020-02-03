// Write a function add that uses a closure that performs addition on arguments in two separate function calls.

function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(2)(3));

//Write a function multiplier that uses a closure to perform multiplication.
//However, the outer function should be stored in a variable which is then called.

function multiplier(num) {
  // outer function
  return x => x * num; // inner function
}
const times = multiplier(2);

console.log(times(2));
console.log(times(3));

var all = 3;
(function() {
  var all = "Hi";
  console.log(all);
})();
console.log;
console.log(all);

//Write a function that accepts several parameters and calculates the amount of money
//that will have been saved as pension until a person retires.
//The function should be self invoked and should have the following parameters:
//The current age of the person // e.g. 40
//The retirement age of the person // e.g. 60
//The monthly wage the person earns // e.g. 1000
//The percentage (as integer) that the person saves each month // e.g. 10%
//If the person has already retired then the message ‘You’re already retired!’ should be printed.
//If not, then the program should calculate how many years remain until the person retires,
//the monthly income and take a specific percent of this income every month as saved money.
//Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it.
//How much money will she have saved until she retires?
//Output: $30000

(retirementCalc = (age, retirementAge, monthlyWage, percentageSaved) => {
  if (age >= retirementAge) {
    console.log(`You're already retired!`);
  } else {
    let yearsLeft = retirementAge - age;
    let percentAdjust = percentageSaved * 0.01;
    let monthlySavings = percentAdjust * monthlyWage;
    let yearlySavings = monthlySavings * 12;
    let moneySaved = yearlySavings * yearsLeft;
    console.log(
      `You will retire in ${yearsLeft} years and will have saved ${moneySaved} euros.`
    );
  }
})(40, 65, 2000, 5);

(retireCalc = (x, y, z, a) => {
  if (x >= y) {
    console.log(`You've already retired!`);
  } else {
    let result = z * (a * 0.01) * 12 * (y - x);
    console.log(result);
  }
})(40, 65, 2000, 5);
