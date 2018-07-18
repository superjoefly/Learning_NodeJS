console.log('Starting notes.js');

// Require Modules:
var fs = require('fs');

///////////////

// Define functions:

// Get (reads) and returns notes from file:
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
  console.log("Notes Saved!")
}


// Validates title and returns current notes:
var validateTitle = (currentNotes, newNote) => {

  var duplicateNotes = currentNotes.filter((note) => note.title === newNote.title);

  if (duplicateNotes.length > 0) {
    console.log("Title must be unique!");
    return currentNotes;
  } else {
    currentNotes.push(newNote);
    return currentNotes;
  }
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

  // Loop to find and display note:
  match = 0;
  currentNotes.forEach(function(note) {
    if (note.title === title) {
      console.log(note.title + ': ', note.body);
      match += 1;
    }
  });

  // If there was no match:
  if (match === 0) {
    console.log("Note not found!");
  }
}



// Remove specific note:
var removeNote = (title) => {
  console.log("Removing note with title:", title);

  // Get current notes:
  currentNotes = getNotes();

  // Loop to find and remove note:
  match = 0;
  currentNotes.forEach(function(note, index) {
    if (note.title === title) {
      match += 1
      currentNotes.splice(index, 1)
      saveNotes(currentNotes)
    }
  });

  // If there was no match:
  if (match === 0) {
    console.log("Note not found!");
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
