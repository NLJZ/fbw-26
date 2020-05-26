const args = process.argv.slice(2);

function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number`);
    process.exit();
  }
  return number;
}
const [operation, ...rest] = args;

const numbers = rest.map(parseNum);
// sum 3 5 6 kfjfl
