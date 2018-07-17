console.log('Starting notes.js');

// Require Modules:
var fs = require('fs');

///////////////

// Define functions:

// Validates title and returns current notes:
var validateTitle = (currentNotes, newNote) => {

  // Check for matching titles:
  var match = 0;
  currentNotes.forEach(function(note) {
    if (note.title === newNote.title) {
      match += 1;
    }
  });

  // If there were any matches:
  if (match > 0) {
    console.log("Title must be unique!");
    return currentNotes;
  } else {
    currentNotes.push(newNote);
    return currentNotes;
  }
}

// Writes notes to file:
var writeNotes = (notesToWrite) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notesToWrite));
  console.log("Notes written to file!")
}

var readNotes = () => {
  return JSON.parse(fs.readFileSync('notes-data.json'));
}


// Adds notes to file:
var addNote = (title, body) => {
  // Create new note object:
  var newNote = {
    title,
    body
  };

  // Initialize notesToWrite to empty array:
  var notesToWrite = [];

  try {
    // Get current notes if they exist:
    currentNotes = readNotes();

    // Validate title is unique:
    notesToWrite = validateTitle(currentNotes, newNote);
    console.log(notesToWrite);

    // Write to file:
    writeNotes(notesToWrite);

  } catch (e) {
    // If the notes file doesn't exist:
    console.log("Creating file and writing note!");
    notesToWrite.push(newNote);

    // Create and write to file:
    writeNotes(notesToWrite);
  }

};



var getAllNotes = () => {
  console.log("Getting all notes...");

  // Get the current notes:
  currentNotes = readNotes();

  // Display the notes:
  currentNotes.forEach(function(note) {
    console.log(note.title + ' : ' + note.body);
  });
};



var getSingleNote = (title) => {
  console.log("Getting note with title:", title);

  // Get the currentNotes:
  currentNotes = readNotes();

  // Loop to find and display note:
  match = 0;
  currentNotes.forEach(function(note) {
    if (note.title === title) {
      match = 1;
      console.log(note.title + ': ', note.body);
    }
  });

  // If there was no match:
  if (match === 0) {
    console.log("Note not found!");
  }
}



var removeNote = (title) => {
  console.log("Removing note with title:", title);

  // Get current notes:
  currentNotes = readNotes();

  // Loop to find and remove note:
  currentNotes.forEach(function(note, index) {
    match = 0;
    if (note.title === title) {
      match += 1
      currentNotes.splice(index, 1)
      console.log(currentNotes)
      writeNotes(currentNotes)
      console.log("Note removed!");
    }
  });

  // If there was no match:
  if (match === 0) {
    console.log("Note not found!");
  }
}



// Export functions:
module.exports = {
  addNote,
  getAllNotes,
  getSingleNote,
  removeNote
};
