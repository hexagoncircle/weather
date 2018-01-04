const request = require('request');
const FORECASTAPIKEY = 'dcda0a2772f65a89e1c8a7b90a278483';

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/dcda0a2772f65a89e1c8a7b90a278483/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to connect to Forecast.io server.');    
    }
  });
};

module.exports.getWeather = getWeather;