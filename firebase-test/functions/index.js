const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');

// Initialize app using firebase credentials helper:
const firebaseApp = firebase.initializeApp(
  functions.config().firebase
);

// Function to retrieve tests object from database:
function getTests() {
  const ref = firebaseApp.database().ref('tests');
  return ref.once('value').then(snap => snap.val());
};

// Create express application:
const app = express();
// Create engine using consolidate:
app.engine('hbs', engines.handlebars);
// Define views folder:
app.set('views', './views');
// Set view engine to hbs:
app.set('view engine', 'hbs');

// Set response header and retrieve tests:
app.get('/', (request, response) => {
  response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  // Get the tests object from database:
  getTests().then(tests => {
    // Pass tests object to index.hbs file:
    response.render('index', { tests });
  })
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
