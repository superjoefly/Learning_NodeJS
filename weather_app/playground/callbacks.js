// Asyncronous Callback:
var getUser = (id, callback) => {
  // Create the user object:
  var user = {
    id: id,
    name: 'James'
  };

  // Call the callback after 3 seconds:
  setTimeout(() => {
    callback(user);
  }, 3000);

  // Print a message:
  console.log("Waiting...");
};

// Call getUser function passing in arguments for
// the id and the callback function:
getUser(33, (userObject) => {
  console.log(userObject);
});
