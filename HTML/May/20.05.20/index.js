// // callbacks one more time
// // let's make hot chocolate
// function prepareHotChocolate(callback) {
//   setTimeout(() => {
//     let milk = "heated";
//     // once milk is heated start next step
//     callback(milk, callback2);
//   }, 2000);
// }
// //callback is just a name
// function callback(milk, callback2) {
//   if (milk == "heated") {
//     let chocolate = "added";
//     // once chocolate added start next step
//     callback2(chocolate, callback3);
//   }
// }

// function callback2(chocolate, callback3) {
//   if (chocolate == "added") {
//     let marshmallow = "added";
//     // once marshmallow added start next step
//     callback3(marshmallow);
//   }
// }

// function callback3(marshmallow) {
//   if (marshmallow == "added") {
//     console.log("Your drink is ready");
//   }
// }

// // calling the function
// prepareHotChocolate(callback);
