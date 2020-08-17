db.users.insert({
  name: "Ali",
  age: "30",
  address: "Berlin",
  hobbies: ["dance", "sleep"],
  email: {
    private: "me@mail.com",
    work: "work@work.com",
  },
  date: Date(),
});
// new user
db.users.insert({
  name: "Nancy",
  age: "37",
  address: "Paris",
  date: Date(),
});

// insert many

db.users.insertMany([
  {
    name: "Francis",
    age: "22",
    address: "Paris",
    date: Date(),
  },
  {
    name: "Olga",
    age: "39",
    address: "Bourdeaux",
    date: Date(),
  },
  {
    name: "Posey",
    age: "45",
    address: "Madrid",
    date: Date(),
  },
]);
