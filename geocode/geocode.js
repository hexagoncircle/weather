const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  var addressURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
  
  request({
    url: addressURL,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Cannot connect to the server');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Cannot find that address');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports.geocodeAddress = geocodeAddress;