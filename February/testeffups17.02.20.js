// - Look at the unit tests for validating a pin. Create a function named "_validPin_" that fulfills the requirements of the tests.
const validPin = num => {
  let numArray = num.split("");
  let numberArray = [];
  let result;

  for (let i = 0; i < numArray.length; i++) {
    numberArray.push(parseInt(numArray[i]));
  }

  if (numberArray.length !== 4) {
    result = false;
  } else if (
    numberArray[0] == numberArray[1] &&
    numberArray[1] == numberArray[2] &&
    numberArray[2] == numberArray[3]
  ) {
    result = false;
  } else if (
    numberArray[0] + numberArray[1] + numberArray[2] + numberArray[3] <
    5
  ) {
    result = false;
  } else if (numberArray[3] % 2 !== 0) {
    result = false;
  } else {
    result = true;
  }
  console.log(result);
};

validPin("1234");

validPin("1235");

validPin("wwww");

validPin("12345");

validPin("2222");

validPin("1000");

validPin("2224");

validPin("3434");
