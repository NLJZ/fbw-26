const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(
  `What's your name, age, city, favorite activites?`,
  (name, age, city, ...args) => 
  readline.close();
}
);
{
    const userGreeting = (name, age, city, ...args) => {
      array = args;
      activities = array.join(", ");
      firstLetterName = name.slice(0, 1);
      restOfName = name.slice(1, name.length);
      firstLetterNameCap = firstLetterName.toUpperCase();
      nameFix = firstLetterNameCap + restOfName;
      firstLetterCity = city.slice(0, 1);
      restOfCity = city.slice(1, name.length);
      firstLetterCityCap = firstLetterCity.toUpperCase();
      cityFix = firstLetterCityCap + restOfCity;
      greeting = `Hi ${nameFix}! I see you are ${age} years old and live in ${cityFix}. You enjoy ${activities}!`;
      if (activities.includes("dance" || "party")) {
        console.log(greeting + " You are cool!");
      } else {
        console.log(greeting);
      }
    };
