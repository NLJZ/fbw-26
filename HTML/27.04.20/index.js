// Traversing

// Node vs Element Nodes

let ele = document.querySelector("#second").previousElementSibling;
let ele2 = document.querySelector("body").previousSibling;
console.log(ele);
console.log(ele2);

//firstChild

let mainText = document.getElementById("text").firstElementChild;
console.log(mainText);
console.log(mainText.textContent);
// nodeName, nodeType, id, innerHTML, innerText

let text = document.querySelector("span");
let closestElement = text.closest(".rad");
console.log(closestElement);
