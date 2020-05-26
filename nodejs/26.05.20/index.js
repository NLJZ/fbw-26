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
  default:
    console.log("I cannot do this. please type 'sum' or 'avg' to calculate ");
}
