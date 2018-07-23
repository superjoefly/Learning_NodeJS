// Darksky.net/dev API Key
// 5a7d00e90d262a07e959b8658cdd7562

const request = require('request');

var getWeather = (location, callback) => {

  var key = '5a7d00e90d262a07e959b8658cdd7562';
  var lat = location.latitude;
  var lng = location.longitude;

  var url = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;

  request({
    url: url,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Error: Unable to connect to Darksky servers!');
    } else if (response === undefined) {
      callback("Invalid address!");
    } else if (response.statusCode === 200) {
      callback(undefined, body.currently);
    }
  })

}

module.exports = {
  getWeather
};
