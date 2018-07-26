// Creating Web Server:
const express = require('express');

// Create new Express app:
var app = express();

// Set up http route handlers:
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

// Bind app to local port:
app.listen(3000);

// In terminal: nodemon server.js to start wev-server:
