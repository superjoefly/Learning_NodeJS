console.log('Starting app.js');

// Requiring Modules:

// Built-In Modules:
const fs = require('fs');

// 3rd Party Modules (installed via NPM):
const _ = require('lodash');
const yargs = require('yargs')

// Custom (self-written) Modules:
const notes = require('./notes.js');


////////////////////////


// Get input from user:

// Convert argv to yargs object:
const argv = yargs.argv;

// Set first propert of yargs object (argv) to 'command' variable:
var command = argv._[0];

console.log('Process:', process.argv);
console.log('Yargs:', argv);
console.log('Command:', command);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAllNotes();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log("Command not recognized...");
}
