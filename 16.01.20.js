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
  console.log(addThem);
}

//There are i bottles of beer on the wall.
//Write a program that will output, “There is one bottle of beer on the wall.”
//“There are two bottles of beer on the wall” up until there are five bottles.

for (let i = 1; i <= 5; i++) {
  if (i < 2) {
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
  } else {
    console.log(`${i} is odd`);
  }
}
