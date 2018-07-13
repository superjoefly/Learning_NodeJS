console.log('Starting notes.js')

// View module object:
// console.log(module);

// Set age property of module.exports object:
module.exports.userAge = 38;

// Set addNote function of module.exports object:
module.exports.addNote = () => {
  console.log("Add Note!")
  return "I'm a new note..."
}

// Set add function of module.exports object:
module.exports.add = (a, b) => {
  return a + b;
}
