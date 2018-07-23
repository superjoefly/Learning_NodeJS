// npm install --save request:
const request = require('request');

var geocodeAddress = (address, callback) => {
  // Encode uri:
  var encAddress = encodeURIComponent(address);

  // request() takes an object and a callback:
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encAddress}&key=AIzaSyD85ttCFuSbg_2hdVHvA-urD2awIOMFhsI`,
    json: true // Convert to javaScript object
  },
  // Callback:
  (error, response, body) => {
    // Error handling:
    if (error) {
      callback("Error: Unable to connect to Google servers!");
    } else if (body.status === 'ZERO_RESULTS') {
      callback("Invalid address!");
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports = {
  geocodeAddress
}











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
