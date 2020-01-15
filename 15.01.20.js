/* Declare two variables: “a” with the value of true, and “b” with the value of false.
Check the result of:
a) a AND b.
b) a OR b.
c) NOT (a AND b). */

let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a || !b);

//Declare three more variables “x”, “y”, “z”. Give these variables number values.
let x = 10;
let y = 10;
let z = 101;

//a) x is greater than z AND x is greater than y.
if (x > z && x > y) {
  console.log("cool")
} else {
  console.log("not cool")
}

//b) x is NOT equal to y.
if (x !== y) {
  console.log("x is not equal to y")
} else {
  console.log("x is equal to y")
}

//c) z is less than y OR z is greater than x.
if (z < y || z > x) {
  console.log("excellent!")
} else {
  console.log("not excellent")
}

//d) x is equal to z OR x is NOT equal to y.
if ( x === z || x !== y) {
  console.log("yahoo!")
} else {
  console.log("alta vista")
}

//e) x is greater than or equal to 10 AND y is less than or equal to 10.
if (x >= 10 && y <= 10) {
  console.log("you're onto something!")
} else {
  console.log("keep tryin'!")
}

//f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.
if ((x * z) < 100 || (x * y) > 100) {
  console.log("cool values you got there")
} else {
  console.log("values aren't bad but not great either")
}

//1. Calculate the perimeter of a square. Assume each side is 4.75cm.
function perimeterSq() {
  let sqSideLength = 4.75;
  let sqPer = sqSideLength * 4
  console.log(`The perimeter of the square is ${sqPer}cm.`);
}
perimeterSq();

//2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
function perimeterTri() {
  let triSide1 = 5;
  let triSide2 = 6;
  let triSide3 = 7;
  let triPer = triSide1 + triSide2 + triSide3;
  console.log(`The perimeter of the triangle is ${triPer}cm.`)
}
perimeterTri();

//3. Calculate the area of a square. Each side is 5cm.
function areaSq(){
  let sqSide = 5;
  let sqArea = Math.pow(sqSide, 2);
  console.log(`The area of the square is ${sqArea}cm.`)
}
areaSq();

//4. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
function areaTri() {
  let side1 = 5;
  let side2 = 6;
  let side3 = 7;
  let p = (side1 + side2 + side3) / 2;
  let triArea = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  console.log(`The area of the triangle is ${triArea}cm.`)
}
areaTri()

//5. Calculate the volume of a cube. Length of each side is 9cm.
function volCube() {
  let sideLength = 9;
  let cubeVol = Math.pow(sideLength, 3);
  console.log(`The volume of the cube is ${cubeVol}cm.`)
}
volCube();

//6. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip
function billPlusTip (bill, tip) {
  tipAmount = bill * (tip / 100);
  totalBill = bill + tipAmount;
  console.log(`Total bill is ${totalBill.toFixed(2)} euros.`)
}
billPlusTip(22.35, 10);
billPlusTip(26.67, 15);
billPlusTip(35.92, 20);