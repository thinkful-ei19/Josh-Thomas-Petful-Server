'use strict';

const {Queue, peek, display} = require('./queue');
const {catSeedData, dogSeedData}= require('./seed');

let cats = new Queue();
let dogs = new Queue();
function initSetupCats() {
  for (let i = 0; i < catSeedData.length; i++) {
    const cat = catSeedData[i];
    cats.enqueue(cat);
  } 
}
function initSetupDogs() {
  for (let i = 0; i < dogSeedData.length; i++) {
    const dog = dogSeedData[i];
    dogs.enqueue(dog);
  }
}

initSetupCats();
initSetupDogs();

// console.log(JSON.stringify(cats));
// console.log(JSON.stringify(dogs));

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');

const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

/* ========GET ENDPOINTS ========== */
app.get('/api/cats', (req, res) => {
  res.json(peek(cats));
});

app.get('/api/dogs', (req, res) => {
  res.json(peek(dogs));
});
/* ========DELETE ENDPOINTS ========== */
app.delete('/api/cats', (req, res) => {
  res.json(cats.dequeue());
});

app.delete('/api/dogs', (req, res) => {
  res.json(dogs.dequeue());
});

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);
console.log(CLIENT_ORIGIN);

// cats.dequeue();
// console.log(cats);

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  runServer();
}

module.exports = { app };
