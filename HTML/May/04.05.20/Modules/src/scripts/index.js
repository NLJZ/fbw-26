import { data } from "./data.js";
let parsedData = JSON.parse(data);
console.log(parsedData);
const section = document.querySelector("#bread");
parsedData.forEach((obj) => {
  console.log(obj);
  let { id, title, ingredients, image } = obj;
  let card = ` <div id="${id}">
  <h2>${title}</h2>
  <img src="${image}" alt="${title}">
  <h6>${ingredients}<h6>
  </div>
  `;
  section.innerHTML += card;
});
