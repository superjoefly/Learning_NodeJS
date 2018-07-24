// Set up api key for project (instructions): http://links.mead.io/api-fix
// my api key: AIzaSyD85ttCFuSbg_2hdVHvA-urD2awIOMFhsI


// npm install --save yargs
const yargs = require('yargs');

// require geocode module:
const geocode = require('./geocode/geocode');

// require weather module:
const weather = require('./weather/weather');

// Convert argv to yargs object; define options:
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


// Get location:
geocode.geocodeAddress(argv.address, (errorMessage, location) => {
  // What does the callback do?
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log("Getting weather info for", location.address);
    // Get Weather Info:
    getWeatherInfo(location);
  }
});

// Get weather infomration:
var getWeatherInfo = (location) => {
  weather.getWeather(location, (errorMessage, currentWeather) => {
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(currentWeather);
    }
  });
};
