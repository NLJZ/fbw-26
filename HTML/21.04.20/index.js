let avatar = document.querySelector(".img");
console.log(avatar);
// avatar.innerHTML = "cool";
// let list = avatar.querySelector(".img");
let list = document.querySelectorAll(".img span");

console.log(list);
list.forEach((item) => {
  item.innerHTML = "nice";
  item.style.backgroundColor = "red";
});
console.log(list.length);
list[2].style.color = "pink";

let navList = document.querySelector("#menuList");
console.log(navList);
// > +
let specialOnes = navList.querySelectorAll("li[class='highlight']");
console.log(specialOnes);
specialOnes[0].innerText = "Nice one";

let moreClass = document.querySelector(".main");
console.log(moreClass);
moreClass.classList.add("small");
moreClass.classList.add("textRtl", "flexSize");
let classArr = ["classOne", "classTwo"];
moreClass.classList.add(...classArr);
moreClass.style.color = "steelblue";
moreClass.style.backgroundColor = "black";
moreClass.style.fontSize = "3rem";
moreClass.style.marginLeft = "5rem";
moreClass.style.display = "flex";
moreClass.style.justifyContent = "center";
moreClass.style.maxWidth = "500px";

document.write("Hi I am Nathan");
document.write("<h1>DOGS</h1>");
