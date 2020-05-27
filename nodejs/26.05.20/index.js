const args = process.argv.slice(2);

function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number`);
    process.exit();
  }
  return number;
}

function sum(numArray) {
  return numArray.reduce((sum, num) => sum + num, 0);
}

function avg(numArray) {
  return sum(numArray) / numArray.length;
}

function med(numArray) {
  sortNums = numArray.sort(function (a, b) {
    return a - b;
  });
  halfArray = Math.floor(sortNums.length / 2);
  if (sortNums.length % 2 !== 0) {
    let median = sortNums[halfArray];
    return median;
  } else {
    let twoNumArray = sortNums.slice(halfArray - 1, halfArray + 1);
    return avg(twoNumArray);
  }
}
const [operation, ...rest] = args;

const numbers = rest.map(parseNum);
// sum 3 5 6 kfjfl

switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;
  case "avg":
    console.log(avg(numbers));
    break;
  case "med":
    console.log(med(numbers));
    break;
  default:
    console.log("I cannot do this. please type 'sum' or 'avg' to calculate ");
}
