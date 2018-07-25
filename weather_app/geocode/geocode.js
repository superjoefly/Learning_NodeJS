// Set up Google api key (instructions): http://links.mead.io/api-fix
// my api key: AIzaSyD85ttCFuSbg_2hdVHvA-urD2awIOMFhsI

// npm install --save request
var request = require('request');
var env = require('../env');

var geocodeAddress = (address) => {

  return new Promise((resolve, reject) => {

    var key = env.codes.googleAPI;
    var encAddress = encodeURIComponent(address);
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encAddress}&key=${key}`;

    // request() takes an object and a callback:
    request({
      url: url,
      json: true // Convert to javaScript object
    },
    // Callback:
    (error, response, body) => {
      // Error handling:
      if (error) {
        reject("Error: Unable to connect to Google servers!");
      } else if (body.status === 'ZERO_RESULTS') {
        reject("Invalid address!");
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }); // end request
  }); // end promise
}; // end geocodeAddress function

module.exports = {
  geocodeAddress
};




// // Using Callback:
// // Set up Google api key (instructions): http://links.mead.io/api-fix
// // my api key: AIzaSyD85ttCFuSbg_2hdVHvA-urD2awIOMFhsI
//
// // npm install --save request
// var request = require('request');
//
// var geocodeAddress = (address, callback) => {
//
//     var key = 'AIzaSyD85ttCFuSbg_2hdVHvA-urD2awIOMFhsI';
//     var encAddress = encodeURIComponent(address);
//     var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encAddress}&key=${key}`;
//
//     // request() takes an object and a callback:
//     request({
//       url: url,
//       json: true // Convert to javaScript object
//     },
//     // Callback:
//     (error, response, body) => {
//       // Error handling:
//       if (error) {
//         callback("Error: Unable to connect to Google servers!");
//       } else if (body.status === 'ZERO_RESULTS') {
//         callback("Invalid address!");
//       } else if (body.status === 'OK') {
//         callback(undefined, {
//           address: body.results[0].formatted_address,
//           latitude: body.results[0].geometry.location.lat,
//           longitude: body.results[0].geometry.location.lng
//         });
//       }
//     }); // end request
// }; // end geocodeAddress function
//
// module.exports = {
//   geocodeAddress
// };
