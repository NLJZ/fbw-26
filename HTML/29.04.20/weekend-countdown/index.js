document.querySelector(".hey").innerText = "hi welcome to weekend app";
let checkBtn = document.querySelector("#check");
let date = new Date();
const getDayName = () => {
  return date.toLocaleDateString("en-En", { weekday: "long" });
};
const weekend = () => {
  let userName = document.querySelector("#userName");
  let result = document.querySelector(".result");
  result.innerHTML = `Hey ${userName.value}, today is ${getDayName()}, ${
    5 - date.getDay()
  } days left until the weekend.`;
};
checkBtn.addEventListener("click", weekend);
