// Require express module:
const express = require('express');

// Require handlebars module:
const hbs = require('hbs');

// Require path module:
const path = require('path');

// Create new Express app:
var app = express();

// Use hbs as default view engine:
app.set('view engine', 'hbs');


////////////////////////


// // Using middleware to access static assets:
// // Navigate to localhost:3000/help.html
// app.use(express.static(__dirname + '/public'));

// // Serve static page using path.join (require path):
// app.get('/help', (req, res) => {
//   // Send html:
//   res.sendFile(path.join(__dirname, '/public', 'help.html'));
// });

////////////////////////

// // Sending html:
// app.get('/', (req, res) => {
//   // Send html:
//   res.send('<h1 style="color: blue;">Hello Express!</h1>');
// });


// // Sending JSON:
// app.get('/bad', (req, res) => {
//   res.send({
//     errorMessage: 'Unable to fulfill request!'
//   });
// });


///////////////////////


// HBS (Handle Bar Syntax) Templating:
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website!',
    copyright: `Copyright ${new Date().getFullYear()} NewUp Developments`
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Me!',
    copyright: `Copyright ${new Date().getFullYear()} NewUp Developments`
  });
});



// Bind app to local port:
app.listen(3000, () => {
  console.log("Server is up on port 3000!");
});

// In terminal: nodemon server.js to start wev-server:
