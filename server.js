// Import our needed node modules
require('es6-promise').polyfill;
require('isomorphic-fetch');
require('dotenv').config();
var parseString = require('xml2js').parseString;
const express = require('express');

// Initialize our app
const app = express();
// Set a const for our api key in .env
const API_CLIENT_KEY = process.env.API_CLIENT_KEY;
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET;
const baseUrl = 'https://www.goodreads.com';

// Set the port to 3001 instead of 3000
app.set('port', process.env.PORT || 3001);

// For later when we deploy to production, use the static
// assets built in the client/build folder instead of
// hosted at localhost:3000
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Extract checking the status of the response for reuse
function checkStatus(response) {
  // If response not okay, throw an error
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  // Otherwise just return the response
  return response;
}

app.get('/api/search/title/:query', (req, res, next) => {
  let query = req.params.query;

  fetch(
    `${baseUrl}/search.xml?key=${API_CLIENT_KEY}&q=${query}&search[field]=all`
  )
    .then(checkStatus)
    .then(response => response.text())
    .then(responseXML => {
      parseString(responseXML, function(err, result) {
        //name authorname
        if (err) {
          throw new Error(err);
        }

        res.json(result.GoodreadsResponse.search[0].results[0].work);
      });
    })
    .catch(error => {
      next(error);
    });
});

app.get('/api/search/author/:query', (req, res, next) => {
  let query = req.params.query;

  fetch(
    `${baseUrl}/search.xml?key=${API_CLIENT_KEY}&q=${query}&search[field]=author`
  )
    .then(checkStatus)
    .then(response => response.text())
    .then(responseXML => {
      parseString(responseXML, function(err, result) {
        if (err) {
          throw new Error(err);
        }
        res.json(result.GoodreadsResponse.search[0].results[0].work);
      });
    })
    .catch(error => {
      next(error);
    });
});

app.get('/api/search/description/:query', (req, res, next) => {
  let query = req.params.query;
  fetch(`${baseUrl}/book/show.JSON?key=${API_CLIENT_KEY}&id=${query}`)
    .then(checkStatus)
    .then(response => response.json())
    .then(json => res.json(json))
    .catch(error => {
      next(error);
    });
});

// Defines next action for errors
function errorHandler(err, req, res, next) {
  console.error(`Error: ${err.stack}`);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
}

// Tell the app to use the errorHandler middleware
app.use(errorHandler);

app.listen(app.get('port'), () => {
  console.log(`Find the server at http://localhost:${app.get('port')}/`);
});
