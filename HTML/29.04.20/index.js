function redBg() {
  this.style.backgroundColor = "red";
}
function whiteBg() {
  this.style.backgroundColor = "white";
}
function newUser() {
  result.innerHTML += "Hi this is you.<br>";
}
function windowLoad() {
  // setInterval(newUser, 1000);
  // alert("hi new person");
}
const stop = () => {
  header.removeEventListener("mouseover", redBg);
  header.removeEventListener("mouseover", redBg);
  header.removeEventListener("mouseleave", whiteBg);
};
function changeColor() {
  event.preventDefault();
  form.style.backgroundColor = "pink";
}
let header = document.querySelector("h1");
let result = document.querySelector(".result");
header.addEventListener("mouseover", redBg);
header.addEventListener("mouseleave", whiteBg);

window.addEventListener("load", windowLoad);

let form = document.querySelector("form");
form.addEventListener("submit", () => {
  alert("Thanks for your input");
});
form.addEventListener("reset", () => {
  alert("Your input has been cleared");
});

// let numOne = document.getElementById("firstNum");
// let numTwo = document.getElementById("secondNum");
// let numSum = document.getElementById("sumResult");
let x = 0;
let y = 0;
firstNum.addEventListener("keyup", () => {
  if (firstNum.value == "") {
    x = 0;
  } else {
    x = parseInt(firstNum.value);
  }
  addEm();
});
secondNum.addEventListener("keyup", () => {
  if (secondNum.value == "") {
    y = 0;
  } else {
    y = parseInt(secondNum.value);
  }
  addEm();
});
function addEm() {
  sumResult.value = x + y;
  if (isNaN(sumResult.value)) {
    sumResult.value = "???";
  }
}
