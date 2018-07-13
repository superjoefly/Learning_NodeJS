console.log('Starting notes.js');

// Define functions:
var addNote = (title, body) => {
  console.log("Adding note:", title, body);
};

var getAllNotes = () => {
  console.log("Getting all notes...");
};

var getNote = (title) => {
  console.log("Getting note...", title)
}

var removeNote = (title) => {
  console.log("Removing note...", title)
}

// Export functions:
module.exports = {
  addNote,
  getAllNotes,
  getNote,
  removeNote
};
