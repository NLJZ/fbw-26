// console.group("Hi, I am light code");

// Promise
const userStatus = new Promise((resolve, reject) => {
  let hasKids = true;
  let hasDog = false;
  if (hasDog) {
    resolve({
      status: "User is cool!",
      emoji: ":)",
    });
  } else if (hasKids) {
    resolve({
      status: "User is going crazy!",
      emoji: ":D",
    });
  } else {
    reject({
      status: "User is alone.",
      emoji: ":(",
    });
  }
});
userStatus
  .then((obj) => {
    document.querySelector(".result").innerHTML = `${obj.status} ${obj.emoji}`;
  })
  .catch((err) => {
    document.querySelector(".result").innerHTML = `${err.status} ${err.emoji}`;
  });

function stepOne(userName) {
  return new Promise((resolve, reject) => {
    console.log("user data being loaded");
    if (userName == "Ali") {
      resolve("Welcome back.");
    } else {
      reject("sorry I don't know you.");
    }
  });
}

function stepTwo(response) {
  return new Promise((resolve) => {
    console.log("Still loading...");
    resolve(`We have been waiting for you ${response}`);
  });
}
// stepOne("Ali")
//   .then((response) => {
//     console.log("response just arrived");
//     return stepTwo(response);
//   })
//   .then((secondResponse) => {
//     console.log(secondResponse);
//   })
//   .catch((err) => console.log(err));

// Async Await

async function startSomething() {
  try {
    const response = await stepOne("Hadi");
    console.log("response just arrived");
    const responseTwo = await stepTwo(response);
    console.log(responseTwo);
  } catch (err) {
    document.querySelector(".result").innerHTML += `<br>${err}`;
  }
}

startSomething();
