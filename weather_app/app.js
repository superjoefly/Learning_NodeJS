// Set up api key (instructions): http://links.mead.io/api-fix
// my api key: AIzaSyD85ttCFuSbg_2hdVHvA-urD2awIOMFhsI

// npm install --save request:
const request = require('request');

// npm install --save yargs
const yargs = require('yargs');

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

  // Encode uri:
  var encAddress = encodeURIComponent(argv.address);


// request takes an object and a callback:
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encAddress}&key=AIzaSyD85ttCFuSbg_2hdVHvA-urD2awIOMFhsI`,
    json: true // Convert to javaScript object
  },
  // Callback:
  (error, response, body) => {
  // Display formatted address:
  console.log(`Formatted Address: ${body.results[0].formatted_address}`);
  // Display latitude and longitude:
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

});






// For Reference (Viewing the Response):
// // request takes an object and a callback:
// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyD85ttCFuSbg_2hdVHvA-urD2awIOMFhsI',
//   json: true // convert to javaScript object
// }, (error, response, body) => {
//   console.log("error:", error);
//   console.log("statusCode:", response && response.statusCode);
//   // 'Pretty Print' the object for viewing in console; indent 2 spaces:
//   console.log("body:", JSON.stringify(body, undefined, 2));
// });
