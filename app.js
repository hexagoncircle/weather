const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

// geocode.geocodeAddress(argv.address, (errorMsg, results) => {
//   if (errorMsg) {
//     console.log(errorMsg);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

weather.getWeather();