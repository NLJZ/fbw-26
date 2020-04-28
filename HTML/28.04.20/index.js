// Events:
// User events (interaction) and Browser Events (loading, etc...)

// Listening:
// Higher order functions aka functions that accept function (callbacks)
let divText = document.querySelector(".text");
const print = () => {
  divText.innerHTML += "Hi I am onclick from HTML<br>";
};

let btn = document.getElementById("more");
btn.onclick = function () {
  divText.innerHTML += "Hi I am on onclick from javascript file<br>";
};

function myFunction() {
  header.style.backgroundColor = "white";
}
//listening to user actions
// EventTarget.addEventListener(<namespace>, <callback>)

let header = document.querySelector("h1");
header.addEventListener("mouseover", () => {
  header.style.backgroundColor = "pink";
});
header.addEventListener("mouseleave", myFunction);

function keyUpFunction(e) {
  this.style.backgroundColor = "pink";
  console.log(e);
  if (e.code == "Enter") {
    print();
  }
}

// function keyDownFunction(e) {
//   if
// }

let userInput = document.getElementById("userInput");
userInput.addEventListener("keyup", keyUpFunction);
userInput.addEventListener("keydown", keyDownFunction);
