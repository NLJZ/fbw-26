const validPin = num => {
  let numArray = num.split("");
  let numberArray = [];
  let result;
  let counter = 0;
  for (let i = 0; i < numArray.length; i++) {
    numberArray.push(parseInt(numArray[i]));
  }

  numberArray.forEach(number => {
    if (number == numberArray[0]) {
      counter++;
    }
  });

  if (numberArray.length !== 4) {
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

  if (counter == 4) {
    result = false;
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

const myObj = {
  "1": 10,
  "2": 20,
  "3": 30
};

let keysArray = Object.entries(myObj);

console.log(keysArray);

let words = ["smart", "kind", "sweet", "small", "clear"];

function _wordConverter_(arr) {
  let newArr = arr.map(function(current) {
    return current + "er";
  });
  console.log(newArr);
}

_wordConverter_(words);
