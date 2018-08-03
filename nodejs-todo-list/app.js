// Require Express Module:
const express = require('express');
// Require Handlebars Module:
const hbs = require('hbs');
// Require File System Module:
const fs = require('fs');
// Require Yargs Module:
const yargs = require('yargs');
// Require Lodash Module:
const _ = require('lodash')
// Require Items Module:
const items = require('./items.js');


/////////////////////


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

// Convert argv to yargs object:
const argv = yargs
  .command('add', 'Add a new list item', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'Display all list items')
  .command('read', 'Read a list item', {
    title: titleOptions
  })
  .command('remove', 'Remove a list item', {
    title: titleOptions
  })
  .command('clear', 'Clear all list items')
  .help()
  .argv;


// Set first property of yargs object to 'command':
const command = argv._[0];

// console.log("Yargs Object:", argv);
// console.log("Title:", argv.title);
// console.log("Body:", argv.body);
// console.log("Command:", command);

////////////////////////////

// Set commands to execute items.js functions:

if (command === 'add') {
  console.log("Adding list item!");
  items.addItem(argv.title, argv.body);
} else if (command === 'list') {
  console.log("Displaying all list items!");
  items.showItems();
} else if (command === 'read') {
  console.log("Fetching list item!");
  items.fetchItem(argv.title);
} else if (command === 'remove') {
  console.log("Removing list item!");
  items.removeItem(argv.title);
} else if (command === 'clear') {
  console.log("Clearing all list items!");
  items.clearItems();
} else {
  console.log("Command not recognized!");
}
