var getUser = (age, callback) => {
  var user = {
    age: age,
    name: 'Ryan'
  };

  setTimeout(() => {
    callback(user);    
  }, 1000);
};

getUser(35, (user) => {
  console.log(`Hello ${user.name}! Your age is ${user.age}`);
});