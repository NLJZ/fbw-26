// Blocking vs Non-Blocking code
// Blocking code
window.setTimeout(() => {
  // alert("Hi");
}, 10000);
// Non-blocking code

let checkPromise = new Promise((resolve, reject) => {
  let x = false;
  if (x) {
    resolve("everything is OK");
  } else {
    reject("that didn't work");
  }
});

checkPromise
  .then((message) => {
    console.log(`yay ${message}`);
  })
  .catch((message) => {
    console.log(`no ${message}`);
  });

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

let ms = 3000;
delay(ms).then(myFunction);

function myFunction() {
  let text = document.querySelector(".text");
  text.innerHTML = `It Took me ${ms} milliseconds to load.`;
}
