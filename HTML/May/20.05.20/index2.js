// const milkCheck = (milk) => {
//   if (milk == "heated") {
//     return true;
//   }
// };

// const chocolateCheck = (chocolate) => {
//   if (chocolate == "added") {
//     return true;
//   }
// };

// const marshmallowCheck = (marshmallow) => {
//   if (marshmallow == "added") {
//     return true;
//   }
// };

// async function prepareHotCocoa() {
//   const milkStatus = await milkCheck("heated");
//   const chocStatus = await chocolateCheck("added");
//   const marshStatus = await marshmallowCheck("added");
//   if (milkStatus == true && chocStatus == true && marshStatus == true) {
//     console.log("Drink is ready");
//   } else {
//     console.log("Drink not ready");
//   }
// }

// prepareHotCocoa("heated", "added", "added");

function milkCheck(response) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (response == "heated") {
        resolve("your milk is hot now add chocolate");
      }
    }, 3000);
  });
}
function chocolateCheck(response) {
  return new Promise((resolve) => {
    resolve(` ${response} now add marshmallow`);
  });
}
function marshmallowCheck(response) {
  return new Promise((resolve) => {
    resolve(` ${response} now your drink is ready`);
  });
}
async function prepareHotCocoa() {
  const step1 = await milkCheck("heated");
  console.log(step1);
  const step2 = await chocolateCheck(step1);
  console.log(step2);
  const step3 = await marshmallowCheck(step2);
  console.log(step3);
}
prepareHotCocoa();
