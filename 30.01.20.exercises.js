const studentGrades = (...args) => {
  let result = "";
  let avg = 0;
  avg = Math.floor(args.reduce((acc, cur) => acc + cur) / args.length);
  //for (let i = 0; i < args.length; i++){
  //   sum += args[i];
  //}
  console.log(avg);
  if (avg < 70) {
    result = `this student has an F mark with a ${avg} percent average`;
  } else if (avg >= 70 && avg <= 80) {
    result = `this student has a C mark with a ${avg} percent average`;
  } else {
    result = `something went wrong`;
  }
  return result;
};
console.log(studentGrades(55, 61));

// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.
hasMonth = str => {
  let result = "";
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november"
  ];
  let winter = months.slice(0, 3);
  let spring = months.slice(3, 6);
  let summer = months.slice(6, 9);
  let fall = months.slice(9, 12);
  let month = [];
  let season;
  strArray = str.toLowerCase().split(" ");
  strArray.forEach(word => {
    if (months.includes(word)) {
      month.push(word);
    }
  });

  season = winter.includes(month)
    ? "Winter"
    : spring.includes(month)
    ? "Spring"
    : summer.includes(month)
    ? "Summer"
    : fall.includes(month)
    ? "Fall"
    : "Sorry";

  console.log(month);
};
console.log(hasMonth("dogs november cats mom december"));

function monthCheck(string) {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "jun",
    "july",
    "august",
    "september",
    "october",
    "november"
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  let strToArray = string.toLowerCase().split(" ");
  let result = "";
  let counter = 0;
  let winter = ["december", "january", "february"];
  let spring = ["march", "april", "may"];
  let summer = ["jun", "july", "august"];
  let autumn = ["september", "october", "november"];
  const currentSeason = monthToLook => {
    let seasonName = "";
    if (winter.includes(monthToLook)) {
      seasonName = seasons[0];
    } else if (spring.includes(monthToLook)) {
      seasonName = seasons[1];
    } else if (summer.includes(monthToLook)) {
      seasonName = seasons[2];
    } else if (autumn.includes(monthToLook)) {
      seasonName = seasons[3];
    } else {
      seasonName = "Sorry something went wong";
    }
    return seasonName;
  };
  //console.log(months);
  for (let i = 0; i < strToArray.length; i++) {
    if (months.includes(strToArray[i])) {
      let currentWord = strToArray[i];
      result += `You have entered ${currentWord}, which is in ${currentSeason(
        currentWord
      )}. `;
      counter++;
    }
  }
  if (counter == 0) {
    result = `Sorry, I didn't find any months in your text.`;
  }
  return result;
}
console.log("monthCheck");

console.log(monthCheck("hi is jun july"));
console.log(monthCheck("Hi hi isaugust"));
