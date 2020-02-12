// Deconstructing objects as function parameters

function fun(num, { name }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}

fun(22, { name: "Ali" });
const userData = {
  firstName: "Nathan",
  lastName: "Johnson",
  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  set fullName(str) {
    let arr = str.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
};

// getter
userData.fullName;

// setter
userData.fullName = "Ali Zzz";
userData.fullName;

// constructor()

function Person(name, age, activities) {
  this.name = name;
  this.age = age;
  this.activities = activities;
  this.printOut = function() {
    console.log(
      `Hey ${this.name} you are ${this.age} years old and you enjoy ${this.activities}.`
    );
  };
}

let nathan = new Person("Nathan Johnson", "39", [
  "reading",
  " writing",
  " movies"
]);
console.log(nathan);
nathan.printOut();

function Human(name, last) {
  this.firstName = name;
  this.lastName = last;
  this.printOut = function() {
    console.log(`Hey ${this.firstName} ${this.lastName}!`);
  };
}

let dog = new Human("Dog", "Man");
dog.printOut();

// class
class Monsters {
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  display() {
    console.log(`It's very odd to be a ${this.kind} from ${this.hometown}.`);
  }
}

let mummy = new Monsters("Mummy", "Oklahoma");
console.log(mummy);
mummy.display();

let vampire = new Monsters("Vampire", "The Yukon");
vampire.display();

const zombie = new Monsters("zombie", "Brazil");
zombie.display();

class Color {
  constructor() {
    this.name = "";
    this.age = 0;
    this.birthDay = 0;
  }
}

const red = new Color();
red.name = "Red";
red.age = 12000;
red.birthDay = 12.12;
console.log(red);

const object = new Object();
const date = new Date();
console.log(date);
let year = date.getFullYear();
console.log(year);

// extends and super()

class Person1 {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  display() {
    console.log(`Hey ${this.name}`);
  }
}

class Child extends Person1 {
  constructor(_name, _age) {
    super(_name, _age);
  }
  show() {
    return `${this.name} is a child that is ${this.age} years old.`;
  }
}

let spike = new Child("Spike", 4);
spike.display();
console.log(spike.show());
spike.increment = function() {
  console.log(`Hey yo!`);
};

spike.increment();

let names = ["Sam", "Rob", "Marie", "Alex"];

// Array.find()
// Returns first truthy result

let result = names.find(name => name.length > 3);
console.log(result);
// Array.filter()
// returns an array of all items that match

result = names.filter(name => name.length > 3);
console.log(result);

// Array.map()
names.map(x => console.log(x));

let letters = ["a", "c", "b", "e"];
let numbers = [2, 4, 6, 7, 8, 9];

// Array.reduce()
//average of numbers array below
result = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
console.log(result);

// Array.sort()
// orders in array depending on UTF-16
letters.sort();
console.log(letters);
names.sort();
console.log(names);

// new Date()
