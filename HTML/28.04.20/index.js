// Events:
// User events (interaction) and Browser Events (loading, etc...)

// Listening:
// Higher order functions aka functions that accept function (callbacks)
let divText = document.querySelector(".text");
const print = () => {
  divText.innerText = "Hi I am onclick from HTML";
};

let btn = document.getElementById("more");
btn.onclick = function () {
  divText.innerText = "Hi I am on onclick from javascript file";
};
