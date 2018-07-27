// Creating Web Server:
const express = require('express');

// Require path module:
var path = require('path');

// Create new Express app:
var app = express();

// Using middleware to access static assets:
// Navigate to localhost:3000/help.html
app.use(express.static(__dirname + '/public'));

// Set up http route handlers (request, response):
app.get('/', (req, res) => {
  // Send html:
  res.send('<h1 style="color: blue;">Hello Express!</h1>');
});


app.get('/about', (req, res) => {
  res.send({
    name: 'Joey',
    age: 38,
    city: 'Boulder',
    likes: [
      'Hiking',
      'Biking',
      'Walking'
    ]
  });
});


app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to fulfill request!'
  });
});


// Serve static page using path.join (require path):
app.get('/help', (req, res) => {
  // Send html:
  res.sendFile(path.join(__dirname, '/public', 'help.html'));
});


// Bind app to local port:
app.listen(3000, () => {
  console.log("Server is up on port 3000!");
});

// In terminal: nodemon server.js to start wev-server:
