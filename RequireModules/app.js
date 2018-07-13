console.log('Starting app.js');

// Requiring Modules:

// Require Built-In Modules:
const fs = require('fs');
const os = require('os');

// Require 3rd Party Modules (installed via NPM):
const _ = require('lodash');

// Require Custom (self-written) Modules:
const notes = require('./notes.js');


////////////////////////


// Define Functions that use Moudles:

// Greet the user; append greeting to file:
function greetUser() {
  // Get user name:
  var userInfo = os.userInfo();
  var userName = userInfo.username;

  // Define userAge:
  var userAge = notes.userAge

  // Define greeting:
  var greeting = `Hello there, ${userName}! You are ${userAge} years old! \n`;

  // Append greeting to file using appendFile method:
  fs.appendFile('greetings.txt', greeting, (err) => {
    if (err) throw err;
    console.log("The data was appeneded to the file!");
  })
};

// Add note from notes.js:
function addUserNote() {
  var result = notes.addNote()
  console.log(result)
};

// Add numbers:
function addNumbers() {
  var result = notes.add(4, 5);
  console.log(result);
};

function testLodash() {
  // Using 3rd Party Modules (Lodash Example):

  // Check if is a string:
  console.log(_.isString('Hello World!')); // True

  // Remove duplicates from array:
  var my_array = ['Joseph', 1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  console.log(_.uniq(my_array));
}


////////////////////////
// Call functions:

greetUser();

addUserNote();

addNumbers();

testLodash();
