// Set up api key for project (instructions): http://links.mead.io/api-fix
// my api key: AIzaSyD85ttCFuSbg_2hdVHvA-urD2awIOMFhsI


// npm install --save yargs
const yargs = require('yargs');

// require geocode:
const geocode = require('./geocode/geocode');

// require darksky:
const darksky = require('./darksky/darksky');

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


  // Get address / coordinates:
  geocode.geocodeAddress(argv.address, (errorMessage, location) => {
    // What does the callback do?
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      // Get Weather Info:
      getWeatherInfo(location);
    }
  });


var getWeatherInfo = (location) => {
  darksky.getWeather(location, (errorMessage, weather) => {
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      console.log("Weather For", location.address);
      console.log(weather);
    }
  })
}
