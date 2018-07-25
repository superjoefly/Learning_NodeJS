// Darksky.net/dev API Key
// 5a7d00e90d262a07e959b8658cdd7562

const request = require('request');

var getWeather = (location) => {
  return new Promise((resolve, reject) => {

    var key = '5a7d00e90d262a07e959b8658cdd7562';
    var lat = location.latitude;
    var lng = location.longitude;

    var url = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;

    request({
      url: url,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body.currently);
      } else {
        reject("Unable to fetch weather!")
      }
    });


  })
};

module.exports = {
  getWeather
};
