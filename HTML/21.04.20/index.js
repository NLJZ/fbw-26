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
