// self invoking functions or Immediately Invoked Function Expression

(function() {
  console.log("Invoked immediately");
})();

(faveNum = function(num = 3) {
  console.log("My favorite number is " + num);
})();

faveNum(5);

var a = 2;

(function() {
  var a = 3;
  console.log(a);
})();

// this one here calls the var a from above
console.log(a);
