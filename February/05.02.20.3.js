// let zoo = [{symbol: "Ccc", from: "0622"},{symbol: "xxc", from: "0712"}];
const zodiacCheck = (name, day, month, year) => {
  const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    outPut: function() {
      monthDay = parseInt(this.birthMonth + this.birthDay);
      let signs = [
        { starSign: "Capricorn", number: "119" },
        { starSign: "Aquarius", number: "218" },
        { starSign: "Pisces", number: "320" },
        { starSign: "Aries", number: "419" },
        { starSign: "Taurus", number: "520" },
        { starSign: "Gemini", number: "620" },
        { starSign: "Cancer", number: "722" },
        { starSign: "Leo", number: "822" },
        { starSign: "Virgo", number: "922" },
        { starSign: "Libra", number: "1022" },
        { starSign: "Scorpio", number: "1121" },
        { starSign: "Sagittarius", number: "1221" },
        { starSign: "Capricorn", number: "1231" }
      ];
      console.log(signs);
      for (let i = 0; i < signs.length; i++) {}
    }
  };
  result.outPut();
  return result;
};

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
