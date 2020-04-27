// Traversing

// Node vs Element Nodes

let ele = document.querySelector("#second").previousElementSibling;
let ele2 = document.querySelector("body").previousSibling;
console.log(ele);
console.log(ele2);

// firstChild

let mainText = document.getElementById("text").firstElementChild;
console.log(mainText);
console.log(mainText.textContent);
// nodeName, nodeType, id, innerHTML, innerText

// closest
let text = document.querySelector("span");
let closestElement = text.closest(".rad");
console.log(closestElement);

// matches
let names = document.querySelectorAll("li");
names.forEach((name) => {
  if (name.matches(".teacher")) {
    console.log(`${name.textContent}`);
    name.style.fontWeight = "bold";
  }
});

let allChildren = document.querySelector("body").children;
console.log(allChildren);

let namesList = document.querySelector("#names").children;
console.log(namesList);

// query selector
let heading = document.querySelector("h1");
heading.style.backgroundColor = "steelblue";
// last child element

let menuList = document.getElementById("menu").lastElementChild;
console.log(menuList);

let allComments = function (element) {
  let arr = [];
  for (let i = 0; i < element.childNodes.length; i++) {
    let node = element.childNodes[i];
    if (node.nodeType == 8) {
      arr.push(node);
    } else {
      arr.push.apply(arr, allComments(node));
    }
  }
  return arr;
};

console.log(allComments(document));
