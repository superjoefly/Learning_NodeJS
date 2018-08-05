// Test File:

// Require utils library:
const utils = require('./utils');

// Test if add function returns correct value:
it('should add two numbers', () => {
  var res = utils.add(2, 3);
  // If the test fails:
  if (res !== 5) {
    throw new Error(`Expected 5, but got ${res}`);
  }
});

// Test if square function returns correct value:
it('should square a number', () => {
  var res = utils.square(3);
  // If the test fails:
  if (res !== 9) {
    throw new Error(`Expected 9, but got ${res}`);
  }
});
