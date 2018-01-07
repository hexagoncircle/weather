const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Get weather for this address',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((res) => {
  var lat = res.data.results[0].geometry.location.lat;
  var lng = res.data.results[0].geometry.location.lng;    
  var weatherUrl = `https://api.darksky.net/forecast/dcda0a2772f65a89e1c8a7b90a278483/${lat},${lng}`;
  var city = res.data.results[0].address_components[1].long_name;
  var address = res.data.results[0].formatted_address;

  if (res.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }
  
  console.log(`Retrieving weather for ${address}...`);
  return axios.get(weatherUrl, {
    params: {
      city: city
    }
  });
}).then((res) => {
  var temperature = res.data.currently.temperature;
  var weatherSummary = res.data.hourly.summary;    
  var city = res.config.params.city;

  console.log(`The current temperature in ${city} is ${Math.round(temperature)} degrees.`);
  console.log(`It will be ${weatherSummary.toLowerCase()}`);
}).catch((err) => {
  if (err.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers');
  } else {
    console.log(err.message);
  }
});
