console.log('Starting app');

var runner = () => {
  console.log('Goodbye');
};

setTimeout(runner, 2000);

setTimeout(() => {
  console.log('Working');
}, 0);

console.log('Finishing up');