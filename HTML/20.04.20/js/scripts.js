console.log("hi from scripts.js");

// window.alert("Hello World");
// let x = window.prompt("enter your name");
// console.log(x);
function change() {
  window.document.getElementsByTagName("h1")[0].outerHTML =
    "<h6>Hi, this is me</h6>";
  let newBox = window.document.getElementById("main");
  console.log(newBox);
  newBox.style.backgroundColor = "skyblue";
  // main.style.backgroundColor = "red";
}

const multiply = () => {
  let userNum = document.querySelector("#num").value;
  // console.log(userNum);
  let x = "";
  for (let i = 0; i <= 10; i++) {
    x += `${i} * ${userNum} = ${i * userNum} <br>`;
  }
  document.querySelector(".result").innerHTML = x;
};
