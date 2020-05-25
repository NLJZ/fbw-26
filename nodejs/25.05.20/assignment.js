// create a program that prints headers to the terminal, 
// this program should accept 2 arguments 
// the first argument should be the number of stars to print before and after the header. 
// The second argument should be the word to print inside the header.
// If no stars or no header are passed to the function, 
// the function should print out 10 stars and the word Hey to the console by default.

function printHeader(stars, word) {
let starNumber = stars;
let theWord = word;
let starsToPrint = "";
if (stars === undefined || word === undefined ) {
  starsNumber = 10;
  theWord = "Hey"

}
for (let i = 0; i < starNumber; i++) {
  starsToPrint += "*"
}
console.log(`${starsToPrint} ${theWord} ${starsToPrint}`)
}

printHeader(3, "dogs");
printHeader(3);
