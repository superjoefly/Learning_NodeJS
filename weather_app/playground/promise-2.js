// npm install --save request
var request = require('request');


var geocodeAddress = (address) => {

  return new Promise((resolve, reject) => {

    var key = 'AIzaSyD85ttCFuSbg_2hdVHvA-urD2awIOMFhsI';
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

}; // end geocode function

module.exports = {
  geocodeAddress
};
