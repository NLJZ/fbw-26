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
