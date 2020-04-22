document.write("Hey, this is me");
document.write("<h3> Nathan </h3>");
const create = () => {
  let newElement = document.createElement("div");
  let newText = document.createTextNode("I am a new element");
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};
