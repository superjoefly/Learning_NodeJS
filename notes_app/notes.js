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


// Display note:
var logNote = (note) => {
  // Break on this line and use repl to output notes //
  debugger;
  console.log("---");
  console.log('Title:', note.title);
  console.log('Body:', note.body);
}


// Writes notes to file:
var saveNotes = (notesToWrite) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notesToWrite));
  console.log("---")
  console.log("Notes Saved!");
}


// Returns notes with duplicate titles:
var getDuplicates = (currentNotes, newNote) => {

  // Create new array with duplicates:
  var duplicateNotes = currentNotes.filter((note) => note.title === newNote.title);

  return duplicateNotes;
}


// Adds notes to file:
var addNote = (title, body) => {

  // Create new note object:
  var newNote = {
    title,
    body
  };

  // Get current notes:
  var currentNotes = getNotes();

  // Check for duplicate titles:
  var duplicateTitles = getDuplicates(currentNotes, newNote);

  // If we have duplicates:
  if (duplicateTitles.length > 0) {
    console.log("---")
    console.log("Err: Title must be unique!");
  } else {
    console.log("Adding Note:");
    // Display the note:
    logNote(newNote);
    // Add new note to current notes:
    currentNotes.push(newNote);
    // Save current notes:
    saveNotes(currentNotes);
  }
};



// Displays all notes:
var listNotes = () => {

  // Get the current notes:
  var currentNotes = getNotes();

  console.log(`Listing ${currentNotes.length} note(s)...`);

  // If we have notes:
  if (currentNotes.length > 0) {
    currentNotes.forEach((note) => logNote(note));
  } else {
    console.log("No notes to display :-(");
  }
};



// Display specific note:
var getSingleNote = (title) => {
  console.log("Getting note with title:", title);

  // Get the currentNotes:
  var currentNotes = getNotes();

  // Create new array with note if found:
  var foundNote = currentNotes.filter((note) => note.title === title);

  // Display note and message to user:
  if (foundNote.length > 0) {
    console.log("Note Found!");
    var note = foundNote[0];
    logNote(note);
  } else {
    console.log("Note not found!");
  }
}



// Remove specific note:
var removeNote = (title) => {

  // Get current notes:
  var currentNotes = getNotes();

  // Creat new array with notes where title doesn't match:
  var notesToWrite = currentNotes.filter((note) => note.title !== title);

  // If the arrays are the same length:
  if (currentNotes.length === notesToWrite.length) {
    console.log("Note not found!");
  } else {
    console.log("Note removed!");
    // Save notes:
    saveNotes(notesToWrite);
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
  listNotes,
  getSingleNote,
  removeNote,
  clearAllNotes
};
