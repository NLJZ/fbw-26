const hacking = str => {
  let hackedArr = [];
  let toSmall = str.toLowerCase();
  let letters = toSmall.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == "a") {
      letters[i] = 4;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "e") {
      letters[i] = 3;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "i") {
      letters[i] = 1;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "o") {
      letters[i] = 0;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "s") {
      letters[i] = 5;
      hackedArr.push(letters[i]);
    } else {
      hackedArr.push(letters[i]);
    }
  }
  let result = hackedArr.join("");
  return result;
};

console.log(hacking("Dolphins swim in the ocean."));
console.log(hacking("I found a rocket ship in my backyard."));

function isSymmetrical(num) {
  let numToStr = num.toString();
  let result = numToStr
    .split("")
    .reverse()
    .join("");
  if (numToStr == result) {
    return true;
  } else {
    return false;
  }
}

console.log(isSymmetrical(444));
console.log(isSymmetrical(4344));
console.log(isSymmetrical(12344321));

const toCamelCase = str => {
  let splitStr = str.split("_");
  let camelArray = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr, restStr;
    if (splitStr[i] == splitStr[0]) {
      camelArray.push(splitStr[0]);
      continue;
    } else {
      firstChr = splitStr[i].slice(0, 1);
      restStr = splitStr[i].slice(1, splitStr[i].length);
    }
    let newWord = firstChr.toUpperCase() + restStr;
    camelArray.push(newWord);
  }

  let result = camelArray.join("");
  return result;
};

console.log(toCamelCase("snack_log_hi_smile_log_number"));

// Pig Latin Translation. Create a function that takes a string of words
// and moves the first letter of each word to the end of it, then adds ‘ay’ to the end of the word.
// This is a basic form of “Pig Latin”.
// Move the first letter of each word to the end of the word.
// Add “ay” to the end of the word.
// Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.

const pigLatin = str2 => {
  let splitString = str2.split(" ");
  let wordArray = [];
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (i = 0; i < splitString.length; i++) {
    let firstChr = splitString[i].slice(0, 1);
    let restStr = splitString[i].slice(1, splitString[i].length);
    let ayEnd = "ay";
    let vowelEnd = "way";
    if (vowels.includes(firstChr)) {
      let newvowword = firstChr + restStr + vowelEnd;
      wordArray.push(newvowword);
    } else {
      let newWord = restStr + firstChr + ayEnd;
      wordArray.push(newWord);
    }
  }

  unfixed = wordArray.join(" ");
  let fixStr = unfixed[0].toUpperCase() + unfixed.substring(1).toLowerCase();
  fixStr = fixStr.replace(".", "");
  fixStr = fixStr + ".";
  return fixStr;
};

console.log(pigLatin("I am your friend."));
console.log(pigLatin("Go to the store buy a box and put it in the closet"));
console.log(pigLatin("I don't know what I am doing."));

function pigLatin2(str) {
  let translation = [];
  const vowels = ["a", "e", "i", "o", "u"];
  let lowerCase = str.toLowerCase();
  let splitStr = lowerCase.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr = splitStr[i][0];
    let remainder = splitStr[i].slice(1, splitStr[i].length);
    if (vowels.includes(firstChr)) {
      const firstChrVal =
        (i ? firstChr : firstChr.toUpperCase()) + remainder + "way";
      translation.push(firstChrVal);
    } else {
      if (i == 0) {
        let firstCharRem = remainder[0];
        let wordRemainder = remainder.slice(1, remainder.length);
        remainder = firstCharRem.toUpperCase() + wordRemainder;
      }
      const newString = remainder + firstChr + "ay";
      translation.push(newString);
    }
  }
  let result = translation.join(" ");
  return result;
}

console.log(pigLatin2("Banana the is"));
console.log(pigLatin2("Hello I am Nathan."));
