// Functions to test:

var add = (a, b) => a + b;

var square = (a) => a * a;

var setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];

  return user;
};

var asyncAdd = (a, b) => {
  // By returning a promise here, mocha will wait for the returned
  // value before continuing with the test:
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

var asyncSquare = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * a);
    }, 1000);
  })
}

///////////////////////

module.exports = {
  add,
  square,
  setName,
  asyncAdd,
  asyncSquare
};
