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
