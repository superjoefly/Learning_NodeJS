// Functions to test:

var add = (a, b) => a + b;

var square = (a) => a * a;

var setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];

  return user;
};

module.exports = {
  add,
  square,
  setName
};
