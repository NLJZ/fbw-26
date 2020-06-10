const OpenWeatherClient = require("./weather-client");
const myKey = require("../../config");
const API_KEY = myKey;

function formatData(data) {
  const result = `It is now ${data.main.temp}\u00B0C in ${data.name}, ${data.sys.country}`;
  const moreInfo = ` Today's weather ${data.weather
    .map((condition) => condition.description)
    .join(", ")}`;
  return result + "\n" + moreInfo;
}

module.exports = async function weather(city, country) {
  const client = new OpenWeatherClient(API_KEY);
  const currentData = await client.getWeather(city, country);
  return formatData(currentData);
};
