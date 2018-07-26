// npm install --save yargs
const yargs = require('yargs');
const axios = require('axios');
const env = require('./env');


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


// Define geocode url:
var key = env.keys.googleAPI;
var encAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encAddress}&key=${key}`;

// Fetch data from geocode url:
axios.get(geocodeURL)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Invalid Address!');
    };

    // Display message with address:
    var formattedAddress = response.data.results[0].formatted_address;
    console.log(`Retrieving weather for ${formattedAddress}`);

    // Define weather url using lat / lng variables:
    var key = env.keys.darkskyKey;
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;

    // Return new Promise:
    return axios.get(weatherURL);
  })
  .then((response) => {
    // Display current weather:
    var currentWeather = response.data.currently;
    console.log(currentWeather);
  })
  .catch(function(error) {
    if (error.code === 'ECONNREFUSED') {
      console.log("Unable to connect to server API!");
      console.log("Please check the following address:");
      console.log("");
      console.log(error.config.url);
    } else {
      console.log(error.message);
    }
  });
