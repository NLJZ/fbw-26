function zodiac(name, day, month, year) {
  const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    outPut: function() {
      monthDay = parseInt(month + day);
      dateArray = [
        119,
        218,
        320,
        419,
        520,
        620,
        722,
        822,
        922,
        1022,
        1121,
        1221,
        1231
      ];
      signArray = [
        "Capricorn",
        "Aquarius",
        "Pisces",
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn"
      ];
      let signIndex;
      for (let i = 0; i <= dateArray.length; i++) {
        if (monthDay <= dateArray[i]) {
          signIndex = dateArray.indexOf(dateArray[i]);
          break;
        }
      }

      let zodiacSign = signArray[signIndex];

      result.starSign = zodiacSign;
      let msg = `Hi ${this.userName}, you were born ${this.birthDay}.${this.birthMonth}.${this.birthYear} and your star sign is ${this.starSign}.`;
      console.log(msg);
    }
  };
  result.outPut();
  return result;
}
zodiac("Nathan", "24", "12", "1980");
zodiac("Nathan", "02", "07", "1980");
