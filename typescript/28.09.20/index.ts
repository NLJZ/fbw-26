console.log("hi");
// let x: number = 0;

// let x: any = 0;

// x = 44;
// let w: number;
// w = 22;
// let q = 10;

// type Food = "Apple" | "Banana" | "Pear";
// let eat: Food = "Apple";

// let dog = "monster";

interface Car {
  model: string;
  year: number;
  [key: string]: any;
}

const Bugatti: Car = {
  model: "Fast",
  year: 1999,
};

const Ferrari: Car = {
  model: "Dogface",
  year: 1888,
  color: "red",
  size: "micro",
  price: 400,
};

function sum(x: number, y: number): string {
  return "hi";
}

function sum2(x: number, y: number): void {
  "hi";
}

let newArray: number[];
newArray = [1, 3, 55, 9];
newArray.push(22);
let carArr: Car[] = [];
carArr.push({ model: "monster", year: 1998 });

type listOfMany = [number?, string?, boolean?];

const arr: listOfMany = [];
arr.push(33);
arr.push("hi");
arr.push(4);
