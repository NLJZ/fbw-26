let x = 1;
let name = "Nathan";
while (x <= 10) {
  console.log(`${name}`);
  x++;
}

let y = 1;
let result = 1;
while (y <= 10) {
  result = y * 9;
  console.log(`${y} * 9 = ${result}`);
  y++;
}

let count = 10;
while (count >= 0) {
  console.log(`this num is ${count}`);
  count--;
}

let a = 101;
do {
  console.log(a);
  a++;
} while (a <= 100);

let zara = 100;
do {
  console.log(`there are ${zara} people in the line`);
  zara--;
} while (zara >= 0);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let line = "#"; line.length < 7; line += "#") {
  console.log(line);
}

for (let k = 0; k <= 10; k += 2) {
  //if (k % 2 == 0)
  console.log(k);
}

for (let index = 100; index <= 1000; ) {
  console.log(index);
  index += 100;
}

for (let i = 0; i <= 100; i++) {
  if (i == 30) {
    break;
  }
  console.log(i);
}

let xx = false;
for (let w = 0; w <= 100; w++) {
  if (xx) {
    console.log("That is it");
    break;
  }
  if (w == 20) {
    xx = true;
  }
}

let result2 = 0;
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    result2 = i * j;
    console.log(`i ${i} * j ${j} = ${result2}`);
  }
}

let str = "This is a log text";
for (let i = 0; i <= str.length; i++) {
  console.log(`The ${i} letter is ${str[i]}`);
}

//Addition. Write a program to add up the numbers 1 to 20.
let addThem = 0;
for (let i = 1; i <= 20; i++) {
  addThem += i;
}
console.log(addThem);

//There are i bottles of beer on the wall.
//Write a program that will output, “There is one bottle of beer on the wall.”
//“There are two bottles of beer on the wall” up until there are five bottles.

for (let i = 1; i <= 5; i++) {
  if (i === 1) {
    console.log(`There is ${i} bottle of beer on the wall.`);
  } else {
    console.log(`There are ${i} bottles of beer on the wall.`);
  }
}

//The odd/even reporter. Write a program that will iterate from 0 to 20.
//For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else if (i % 2 == 1) {
    console.log(`${i} is odd`);
  }
}

// 1, 2, 4, 8... 128

for (let i = 1; i <= 128; i *= 2) {
  console.log(i);
}

// 0, 2, 4... 10

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 3, 6, 9 ... 15
for (let i = 3; i <= 15; i += 3) {
  console.log(i);
}

// 9, 8, 7... 0
for (let i = 9; i >= 0; i--) {
  console.log(i);
}

// 1 1 1 2 2 2 3 3 3 4 4 4

for (let m = 1; m <= 4; m++) {
  for (let j = 0; j <= 4; j++) {
    console.log(j);
  }
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (let m = 1; m <= 4; m++) {
  for (let j = 0; j <= 4; j++) {
    console.log(j);
  }
}

let box = "";
for (let i = 0; i <= 4; i++) {
  box += "YYYY \n";
}
console.log(box);

let thing = "";
for (let i = 1; i <= 4; i++) {
  thing += "T";
  console.log(thing);
}

for (let i = 4; i > 0; i--) {
  let atStuff = "@@@@";
  let atFinal = atStuff.slice(0, i);
  console.log(atFinal);
}

let firstName = "Nathan";
let firstName1 = "Peter";
let firstName2 = "Orland";

let arr = ["Nathan", "Peter", "Orland"];
console.log(arr[2]);

let arrInt = [1, 2, 3, 4, 5, 6];
console.log(arrInt[3]);

let arrNum = ["First", "Second", "Third", "Fourth"];
for (let i = 0; i < arrNum.length; i++) {
  console.log(`${i} is the ${arrNum[i]}`);
}

let arrSt = [];
for (let i = 0; i <= 10; i++) {
  arrSt[i] = 2 + i;
}
console.log(arrSt);
