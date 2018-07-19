console.log('Starting notes.js');

// Require Modules:
var fs = require('fs');

///////////////

// Define functions:

// Gets (reads) and returns notes from file:
var getNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}


// Saves (writes) notes to file:
var saveNotes = (notesToWrite) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notesToWrite));
  console.log("Notes Saved!");
}


// Validates title and returns current notes:
var validateTitle = (currentNotes, newNote) => {

  // Create new array with duplicates:
  var duplicateNotes = currentNotes.filter((note) => note.title === newNote.title);

  // If we have duplicates:
  if (duplicateNotes.length > 0) {
    console.log("Err: Title must be unique!");
  } else {
    console.log("Note created!");
    currentNotes.push(newNote);
  }
  return currentNotes;
}


// Adds notes to file:
var addNote = (title, body) => {
  console.log("Adding note!")

  // Create new note object:
  var newNote = {
    title,
    body
  };

  // Initialize notesToWrite to empty array:
  var notesToWrite = [];

  // Get current notes:
  currentNotes = getNotes();

  // Validate title and return notes to write:
  notesToWrite = validateTitle(currentNotes, newNote);

  // Write notes to file:
  saveNotes(notesToWrite);
};



// Displays all notes:
var getAllNotes = () => {
  console.log("Getting all notes...");

  // Get the current notes:
  var currentNotes = getNotes();

  // If we have notes:
  if (currentNotes.length > 0) {
    currentNotes.forEach(function(note) {
      console.log(note.title + ' : ' + note.body);
    })
  } else {
    console.log("No notes to display :-(");
  }
};



// Display specific note:
var getSingleNote = (title) => {
  console.log("Getting note with title:", title);

  // Get the currentNotes:
  currentNotes = getNotes();

  // Create new array with note if found:
  singleNote = currentNotes.filter((note) => note.title === title);

  // Display note and message to user:
  if (singleNote.length > 0) {
    console.log("Note Found!");
    console.log(singleNote[0].title + ' : ' + singleNote[0].body);
  } else {
    console.log("Note not found!");
  }
}



// Remove specific note:
var removeNote = (title) => {
  console.log("Removing note with title:", title);

  // Get current notes:
  currentNotes = getNotes();

  // Creat new array with notes where title doesn't match:
  notesToWrite = currentNotes.filter((note) => note.title !== title);

  // If the arrays are the same length:
  if (currentNotes.length === notesToWrite.length) {
    console.log("Note not found!");
  } else {
    console.log("Note removed!");
  }
}


// Clears all notes:
var clearAllNotes = () => {
  console.log("Clearing all notes!");

  // Write empty array to file:
  saveNotes([]);
}



// Export functions:
module.exports = {
  addNote,
  getAllNotes,
  getSingleNote,
  removeNote,
  clearAllNotes
};
