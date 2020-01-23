const amp = num => {
  let result = [];
  let ampByTen = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 4 == 0) {
      ampByTen = i * 10;
      result.push(ampByTen);
    } else {
      result.push(i);
    }
  }
  return result;
};
console.log(amp(24));

function unique(arr) {
  //[1, 1, 2, 1, 1, 1]
  let currentValue = 0;
  let current = []; //1 , 1 , 1
  let remainder = [];
  for (let i = 0; i < arr.length; i++) {
    if (current.length === 0 || current[0] === arr[i]) {
      current.push(arr[i]); // 1
      currentValue++; // currentValue = currentValue +1;
    } else if (current[0] !== arr[i]) {
      remainder.push(arr[i]); //2
    }
  }
  if (currentValue === 1) {
    return current[0];
  } else {
    return remainder[0];
  }
}

let numArray = [1, 1, 2, 3, 3, 1];
console.log(unique(numArray));
