// // Convert object to JSON string:
// var user = {
//   name: 'Joseph',
//   age: 38
// };
//
// // Convert to JSON string object:
// var stringObj = JSON.stringify(user);
//
// // View in console:
// console.log("Type Of: ", typeof stringObj);
// console.log("JSON Object: ", stringObj);
//
// console.log("-------------")
//
// // Convert back to regular javaScript object:
// var javaScriptObject = JSON.parse(stringObj);
//
// console.log("Type Of: ", typeof javaScriptObject);
// console.log("JavaScript Object: ", javaScriptObject);


////////////////////

// Write to File //

// Require File System Module:
const fs = require('fs');

// Define object:
var originalNote = {
  title: 'Some Title',
  body: 'Some body...'
};

// Convert to JSON string:
var stringNote = JSON.stringify(originalNote);

// Write to file:
fs.writeFileSync('my-notes.json', stringNote);

///////

// Read from file:
var noteString = fs.readFileSync('my-notes.json');

// Convert back to javaScript object:
var myNote = JSON.parse(noteString);

// View in console:
console.log("typeof:", typeof myNote);
console.log("Title: ", myNote.title);
console.log("Body: ", myNote.body);
