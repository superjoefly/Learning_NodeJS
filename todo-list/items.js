// Require FS Module:
const fs = require('fs');

// Functions:

// Get items from items-data.json file:
var getItems = () => {
  try {
    // Get data from items-data.json file:
    var itemsString = fs.readFileSync('items-data.json');
    // Return javascript object:
    return JSON.parse(itemsString);
  } catch (e) {
    // Return empty array:
    return [];
  }
};

// Returns new array of duplicates:
var getDuplicateTitles = (newItem, currentItems) => {
  var duplicates = currentItems.filter((item) => item.title === newItem.title);

  return duplicates;
};

// Display list item:
var logItem = (item) => {
  console.log("---------------")
  console.log("Title:", item.title);
  console.log("Body:", item.body);
}

// Write list items (JSON string) to file:
var saveItems = (currentItems) => {
  fs.writeFileSync('items-data.json', JSON.stringify(currentItems));
  console.log("--------------")
  console.log("List items saved!");
};

/////////////////////////////

// Add List Item:
var addItem = (title, body) => {
  // Create new list item:
  var newItem = {
    title,
    body
  };

  // Get current items:
  var currentItems = getItems();

  // Get duplicate titles:
  var duplicateTitles = getDuplicateTitles(newItem, currentItems);

  // If we have duplicates, display error, otherwise add item:
  if (duplicateTitles.length > 0) {
    console.log("Error: Titles must be unique!");
  } else {
    console.log("----------");
    logItem(newItem);
    currentItems.push(newItem);
    saveItems(currentItems);
  }
};


// Display all list items:
var showItems = (title) => {
  // Get the current list items:
  var currentItems = getItems();

  if (currentItems.length > 0) {
    // Display each list item:
    currentItems.forEach(function(item) {
      logItem(item);
    });
  } else {
    console.log("No list items to display...");
  }
};


// Display individual list item:
var fetchItem = (title) => {
  // Get the current list items:
  var currentItems = getItems();

  // Return new array of items where title matches:
  var foundItem = currentItems.filter((item) => item.title === title);

  // If we have a matching title:
  if (foundItem.length > 0) {
    // Log the item:
    logItem(foundItem[0]);
  } else {
    console.log("List item not found!");
  }
};


// Remove individual list item:
var removeItem = (title) => {
  // Get the current list items:
  var currentItems = getItems();

  // Return new array of items where title doesn't match:
  var itemsToWrite = currentItems.filter((item) => item.title !== title);

  // If the length of the arrays is the same:
  if (currentItems.length === itemsToWrite.length) {
    console.log("List item not found!");
  } else {
    // Overwrite items in file with new array:
    console.log("List item removed!");
    saveItems(itemsToWrite);
  }
};


// Clear all list items:
var clearItems = () => {
  saveItems([]);
  console.log("List items cleared!");
};




// Export functions:
module.exports = {
  addItem,
  showItems,
  fetchItem,
  removeItem,
  clearItems,
  getItems
};
