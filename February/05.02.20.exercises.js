// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}
const first = { firstName: "John" };
const last = { lastName: "Smith" };
const one = { dog: "yes", star: "no" };
const two = { dogs: "no", stars: "yes" };
const mergeObjects = (firstObject, secondObject) => {
  return Object.assign(firstObject, secondObject);
};
console.log(mergeObjects(first, last));
console.log(mergeObjects(one, two));

const fun = (x, o) => {
  return Object.assign(x, o);
};

console.log(fun(first, last));

const fun2 = (x, o) => {
  const result = { ...x, ...o };
  return result;
  // return {...o,...x}; //this also works
};

console.log(fun2(first, last));

let person1 = {
  userName: "Nathan Johnson",
  birthDay: 2,
  birthMonth: "July",
  birthYear: 1980
};

function zodiac(name, day, month, year) {
  const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    outPut: function() {
      let msg = `Hi ${this.userName}, you were born ${this.birthDay}.${this.birthMonth}.${this.birthYear} and your star sign is ${this.starSign}.`;
      console.log(msg);
    }
  };

  monthDay = parseInt(month + day);

  dateArray = [
    119,
    218,
    320,
    419,
    520,
    620,
    722,
    822,
    922,
    1022,
    1121,
    1221,
    1231
  ];

  signArray = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn"
  ];

  let signIndex;
  for (let i = 0; i <= dateArray.length; i++) {
    if (monthDay <= dateArray[i]) {
      signIndex = dateArray.indexOf(dateArray[i]);
      break;
    }
  }

  let zodiacSign = {};
  for (let i = 0; i <= signArray.length; i++) {
    if (signIndex == signArray.indexOf(signArray[i])) {
      zodiacSign = signArray[i];
    }
  }
  result.starSign = zodiacSign;
  result.outPut();
  return result;
}

zodiac("Nathan", "02", "07", "1980");
zodiac("Leonardo da Vinci", "15", "04", "1452");
zodiac("Charles Darwin", "12", "23", "1809");
