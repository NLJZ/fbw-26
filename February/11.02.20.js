// Nesting and accessing arrays within each other
const array = [
  [2, 3, 4],
  [444, 555, 666],
  [123, 456, 789]
];
console.log(array[1][1]);
console.log(array[2][1]);
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]); // 0
  }
}

let arrayNew = [];
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 2; j++) {
    arrayNew.push([i, j, 33, i]);
  }
}

let names = ["Elena", "Orland", "Peter"];
names.forEach(name => console.log(name));
names.map(name => console.log(name));
let family = [
  ["Elena", 30, "Audio Artist"],
  ["Barry", 65, "Writer"],
  ["Tonya", 50, "Artist"]
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
family.forEach(arr => arr.forEach(element => console.log(element)));
//array.forEach(arr => arr.forEach(element => console.log(element)));
//array.forEach(index => index.forEach(element => element));
//console.log(arrayNew);
for (let innerArray of family) {
  for (let element of innerArray) {
    console.log(element);
  }
}

// Nesting Objects
const tShirt = {
  color: "red",
  size: ["XS", "S", "M", "L", "XLS"],
  countries: {
    name: ["China", "Germany"],
    capital: ["Beijing", "Berlin"],
    obj: {
      one: 3344,
      two: 5654,
      printOut: function() {
        console.log(this.one);
      }
    },
    display: function() {
      console.log(this.name);
    }
  },
  fabric: "cotton",
  method: function() {
    console.log(this.color);
  }
};

console.log(tShirt.size[2]);
console.log(tShirt.countries.capital[1]);
console.log(tShirt.countries.name[0]);
console.log(tShirt.countries.obj.two);
tShirt.countries.obj.printOut();
tShirt.countries.display();
tShirt.method();

let newShortWay = tShirt.countries;
newShortWay.display();

let car = ["Ford", "pink", 2020, "eng", "xs"];
// let carName = car[0];
// let carColor = car[1];
// let carYear = car[2];
let [carName, carColor, carYear, ...rest] = car;
console.log(carName, carColor, carYear);
console.log(rest);

const object = {
  firstName: "Nathan",
  age: "39",
  country: "Germany"
};
({ firstName, age, country } = object);
console.log(firstName);
