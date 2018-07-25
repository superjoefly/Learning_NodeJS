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


// Get Location (USING PROMISES):
geocode.geocodeAddress(argv.address).then((location) => {
  console.log("Getting weather information for", location.address);
  return weather.getWeather(location);
}).then((weather) => {
  console.log(weather);
}).catch((errorMessage) => {
  console.log(errorMessage)
});


// // Get Location (USING CALLBACKS):
// geocode.geocodeAddress(argv.address, (errorMessage, location) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log("Getting weather info for", location.address);
//     // Get Weather Info:
//     weather.getWeather(location, (errorMessage, currentWeather) => {
//       if (errorMessage) {
//         console.log(errorMessage);
//       } else {
//         console.log(currentWeather);
//       }
//     });
//   }
// });
