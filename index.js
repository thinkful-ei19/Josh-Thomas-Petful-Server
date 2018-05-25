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
  cats.dequeue();
  const randomPic = `http://loremflickr.com/3${(Math.round(Math.random() * Math.floor(30)))}/240/cat`;
  console.log(randomPic);
  let randCat = catSeedData[Math.round(Math.random() * Math.floor(10))];
  randCat.imageURL = randomPic;
  randCat.breed = catSeedData[Math.floor(Math.random() * Math.floor(10))].breed;
  console.log(randCat);
  cats.enqueue(randCat);
  res.json(peek(cats));

});

app.delete('/api/dogs', (req, res) => {
  dogs.dequeue();
  const randomPic = `http://loremflickr.com/3${(Math.round(Math.random() * Math.floor(30)))}/240/dog`;
  console.log(randomPic);
  let randDog = dogSeedData[Math.round(Math.random() * Math.floor(10))];
  randDog.imageURL = randomPic;
  randDog.breed = dogSeedData[Math.floor(Math.random() * Math.floor(10))].breed;
  console.log(randDog);
  dogs.enqueue(randDog);
  res.json(peek(dogs));

});

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);
// // console.log(CLIENT_ORIGIN);
// // // cats.dequeue();

// dogSeedData[0].imageURL = imageURL;
// console.log(dogSeedData[0].imageURL);

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

// console.log(Math.round(Math.random() * Math.floor(10)));

module.exports = { app };
