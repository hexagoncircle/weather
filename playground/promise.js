// var asyncAdd = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a === 'number' && typeof b === 'number') {
//         resolve(a + b);
//       } else {
//         reject('Only use numbers!');
//       }
//     }, 1500);
//   });
// }

// asyncAdd(15, 5).then((res) => {
//   console.log('Result:', res);
//   return asyncAdd(res, 10);
// }).then((res) => {
//   console.log('Next result:', res);
// }).catch((err) => {
//   console.log(err);
// });

const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    var addressURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
    
    request({
      url: addressURL,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Cannot connect to the server');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Cannot find that address');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('98121').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}).catch((err) => {
  console.log('This did not work!');
});