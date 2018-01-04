var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey, it worked!');
    reject('Unable to fulfill promise');
  }, 2000);
});

somePromise.then((msg) => {
  console.log('Success: ', msg);
}, (errorMsg) => {
  console.log('Error: ', errorMsg);
});