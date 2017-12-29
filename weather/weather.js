const request = require('request');

var getWeather = () => {
  request({
    url: 'https://api.darksky.net/forecast/[key]/[lat]/[long]',
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);    
    } else {
      console.log('Unable to connect to Forecast.io server.');    
    }
  });
};

module.exports.getWeather = getWeather;