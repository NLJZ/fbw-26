// Object literal context
// With objects you store united data/functions in a variable7
const o = {
  name: "Nathan",
  age: "39",
  add: "xxx str"
};

// Property accessors
// 1- Dot Notation | Object.property
o.name;
o.age = 35;

// 2 bracket notation
o["add"] = "Seestr";

// Object.keys
console.log(Object.keys(o));

// Object.values
console.log(Object.values(o));

// Methods
o.print = function() {
  console.log(
    `Hi ${o.name} you are very old ${o.age} and it's very nice to live in ${o.add}`
  );
};
o.print();

function userData(userName, userAge, userAdd) {
  const obj = {
    name: userName,
    age: userAge,
    add: userAdd,
    // No ES6!!!
    outPut: function() {
      let msg = `Hi ${this.name} you are very old ${this.age} and it's very nice to live in ${this.add}`;
      console.log(msg);
    }
  };
}

userData("Sandy", 45, "Hawthorne");
// this

// Object.prototype.hasOwnProperty()

const person = {
  height: 177,
  age: 34,
  city: "Berlin"
};
console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("sss"));

// Object.getOwnPropertyNames
console.log(Object.getOwnPropertyNames(person));
