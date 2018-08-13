// Test File:

// Require utils library:
const utils = require('./utils');

// Require expect:
const expect = require('expect');


/////////////////////////


// Custom matcher (used for divisibility tests):
expect.extend({
  toBeDivisibleBy(received, argument) {
    const pass = received % argument === 0;
    if (pass) {
      return {
        message: () =>
        `expected ${received} to not be divisible by ${argument}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be divisible by ${argument}`,
          pass: false,
      };
    }
  }
});


///////////////////////////


// Contain blocks of tests using describe():
describe('Utils:', () => {
  // Nested test block add:
  describe('#add', () => {
    // Test if add function returns correct value:
    it('should add two numbers', () => {
      var res = utils.add(2, 3);
      expect(res).toBe(5); // -> pass
    });

    // Async add:
    it('should async add two numbers', () => {
      return utils.asyncAdd(4, 5)
      .then((result) => {
        expect(result).toBe(9); // -> pass
        expect(typeof result).toBe('number'); // -> pass
      });
    });
  })

  // Nested test block for square:
  describe('#square', () => {
    // Should Square:
    it('should square a number', () => {
      var res = utils.square(3);
      expect(res).toBe(9); // -> pass
    });

    // Async Should Square:
    it('should async square a number', () => {
      return utils.asyncSquare(3)
      .then((result) => {
        expect(result).toBe(9); // -> pass
        expect(typeof result).toBe('number'); // -> pass
      });
    });
  })
});


////////////////////////


// Playground tests:
describe('Playground:', () => {
  // Nested block for typof:
  describe('#typeof:', () => {
    // Test for typeof:
    it('should be a number', () => {

      var res = utils.add(2, 3);

      // Expect typof 9 to be a number -> pass
      expect(typeof res).toBe('number');
    });
  })

  // Nested block for equality tests:
  describe('#equality:', () => {
    // Test for equality (value):
    it('value should be equal', () => {
      // Expect value to equal value:
      expect(12).toBe(12);

      // Expect value not to equal value -> pass
      expect(12).not.toBe(13);
    });


    // Test for equality (objects and arrays):
    it('array or object should be equal', () => {
      // Object (equal to):
      expect({name: 'Joey'}).toEqual({name: 'Joey'});

      // Array(not equal to):
      expect(['red', 'blue']).not.toEqual(['red', 'yellow']);
    });
  })

  // Nested block for inclusion tests:
  describe('#inclusion', () => {

    // Test for inclusion:
    it('should include', () => {
      // Object:
      expect({name: 'Joey'}).toEqual(
        expect.objectContaining({name: 'Joey'})
      )
      // Array:
      expect(['red', 'blue']).toEqual(
        expect.arrayContaining(['red'])
      )
    })
  })

  // Nested block for divisibility tests:
  describe('#divisibility', () => {

    // Test for divisibility:
    it('should be divisible by', () => {

      var res = utils.square(3); // returns 9

      // Expect 9 to be divisible by 3 -> pass
      expect(res).toBeDivisibleBy(3);

      // Expect 9 to NOT be divisible by 2 -> pass
      expect(res).not.toBeDivisibleBy(2);
    });
  });


  // CHALLENGE: Check if first and last names are set:
  describe('#challenge', () => {
    it('should have first and last names set', () => {

      // Define user object:
      var userObj = {
        location: 'Boulder',
        age: 38
      }

      // Set first and last name properties of user object:
      var userObj = utils.setName(userObj, 'Joseph Atwood');

      // Assert that userObj variable holds and object:
      expect(typeof userObj).toBe('object');

      // Check that userObj has proper first and last name values:
      expect(userObj).toEqual(
        expect.objectContaining({firstName: 'Joseph', lastName: 'Atwood'})
      );
    });
  });

});
