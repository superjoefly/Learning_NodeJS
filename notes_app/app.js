// Requiring Modules:

// Built-In Modules:
const fs = require('fs');

// 3rd Party Modules (installed via NPM):
const _ = require('lodash');
const yargs = require('yargs');

// Custom (self-written) Modules:
const notes = require('./notes.js');


////////////////////////


// Yargs Options:
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};


// Convert argv to yargs object (chain methods):
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .command('clear', 'Clear all notes')
  .help()
  .argv;


// Set first propert of yargs object (argv) to 'command' variable:
var command = argv._[0];

// // View in console:
// console.log('Process:', process.argv);
// console.log('Yargs Object:', argv);
// console.log('Command:', command);


if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.listNotes();
} else if (command === 'read') {
  notes.getSingleNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else if (command === 'clear') {
  notes.clearAllNotes();
} else {
  console.log("Command not recognized...");
}
