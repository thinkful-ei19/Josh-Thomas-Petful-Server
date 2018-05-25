'use strict';

const {Queue, peek, display} = require('./queue');
const catSeedData = [
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'http://thecatapi.com/api/images/get?api_key=[MzE3Mjk3]&format=src&results_per_page=1',
    imageDescription: 'Cute Cat',
    name: 'Whiskers',
    gender: 'Female',
    age: 20,
    breed: 'MaineCoon',
    story: 'Abandoned by previous owner'
  },
  {
    imageURL: 'http://thecatapi.com/api/images/get?api_key=[MzE3Mjk3]&format=src&results_per_page=1',
    imageDescription: 'Cute Cat',
    name: 'Tom',
    gender: 'Female',
    age: 6,
    breed: 'Persian',
    story: 'Abandoned by previous owner'
  },
  {
    imageURL: 'http://thecatapi.com/api/images/get?api_key=[MzE3Mjk3]&format=src&results_per_page=1',
    imageDescription: 'Exotic Cat',
    name: 'Fluffy',
    gender: 'Male',
    age: 8,
    breed: 'AmericanShorthair',
    story: 'Owner moved to another country'
  },
  {
    imageURL: 'http://thecatapi.com/api/images/get?api_key=[MzE3Mjk3]&format=src&results_per_page=1',
    imageDescription: 'Exotic Cat',
    name: 'Fluffy',
    gender: 'Male',
    age: 12,
    breed: 'Persian',
    story: 'Owner Died'
  },
  {
    imageURL: 'http://thecatapi.com/api/images/get?api_key=[MzE3Mjk3]&format=src&results_per_page=1',
    imageDescription: 'Loving Cat',
    name: 'Baby',
    gender: 'Male',
    age: 0,
    breed: 'tabby',
    story: 'Stray'
  },
  {
    imageURL: 'http://thecatapi.com/api/images/get?api_key=[MzE3Mjk3]&format=src&results_per_page=1',
    imageDescription: 'Beautiful Coat',
    name: 'MrKitty',
    gender: 'Male',
    age: 12,
    breed: 'Balinese',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'http://thecatapi.com/api/images/get?api_key=[MzE3Mjk3]&format=src&results_per_page=1',
    imageDescription: 'Playful Cat',
    name: 'Whiskers',
    gender: 'Male',
    age: 3,
    breed: 'AmericanShorthair',
    story: 'Stray'
  },
  {
    imageURL: 'http://thecatapi.com/api/images/get?api_key=[MzE3Mjk3]&format=src&results_per_page=1',
    imageDescription: 'Loving Cat',
    name: 'Max',
    gender: 'Female',
    age: 19,
    breed: 'bengal',
    story: 'Owner moved to another country'
  },
  {
    imageURL: 'http://thecatapi.com/api/images/get?api_key=[MzE3Mjk3]&format=src&results_per_page=1',
    imageDescription: 'Cute Cat',
    name: 'Tigger',
    gender: 'Female',
    age: 11,
    breed: 'bengal',
    story: 'Abandoned by previous owner'
  },
  {
    imageURL: 'http://thecatapi.com/api/images/get?api_key=[MzE3Mjk3]&format=src&results_per_page=1',
    imageDescription: 'Beautiful Coat',
    name: 'Coco',
    gender: 'Female',
    age: 19,
    breed: 'MaineCoon',
    story: 'Thrown on the street'
  }
];
const dogSeedData = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://dog.ceo/api/breeds/image/random',
    imageDescription: 'Good Boy',
    name: 'Hope',
    gender: 'Female',
    age: 12,
    breed: 'Pitbull',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://dog.ceo/api/breeds/image/random',
    imageDescription: 'Great to have with kids',
    name: 'Bailey',
    gender: 'Male',
    age: 10,
    breed: 'Great Dane',
    story: 'Owner Died'
  },
  {
    imageURL: 'https://dog.ceo/api/breeds/image/random',
    imageDescription: 'Brown coat straight hair',
    name: 'Morgan',
    gender: 'Male',
    age: 9,
    breed: 'Poodle',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://dog.ceo/api/breeds/image/random',
    imageDescription: 'Tall build with short black coat',
    name: 'Scooby',
    gender: 'Female',
    age: 17,
    breed: 'German Shepard',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://dog.ceo/api/breeds/image/random',
    imageDescription: 'Brown coat straight hair',
    name: 'Morgan',
    gender: 'Male',
    age: 2,
    breed: 'German Shepard',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://dog.ceo/api/breeds/image/random',
    imageDescription: 'Brown coat straight hair',
    name: 'Buddy',
    gender: 'Female',
    age: 3,
    breed: 'Great Dane',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://dog.ceo/api/breeds/image/random',
    imageDescription: 'Curly blonde coat',
    name: 'Charlie',
    gender: 'Female',
    age: 7,
    breed: 'Bulldog',
    story: 'Owner Died'
  },
  {
    imageURL: 'https://dog.ceo/api/breeds/image/random',
    imageDescription: 'Good Boy',
    name: 'Rover',
    gender: 'Male',
    age: 20,
    breed: 'Husky',
    story: 'Owner Died'
  },
  {
    imageURL: 'https://dog.ceo/api/breeds/image/random',
    imageDescription: 'Great to have with kids',
    name: 'Charlie',
    gender: 'Male',
    age: 14,
    breed: 'Bulldog',
    story: 'Owner moved to another country'
  },
  {
    imageURL: 'https://dog.ceo/api/breeds/image/random',
    imageDescription: 'Tall build with short black coat',
    name: 'Bailey',
    gender: 'Female',
    age: 0,
    breed: 'Golden Retreiver',
    story: 'Thrown on the street'
  }
];

let cats = new Queue();
let dogs = new Queue();
function initSetupCats() {
  for (let i = 0; i < catSeedData.length; i++) {
    const cat = catSeedData[i];
    return cats.enqueue(cat);
  } 
}
function initSetupDogs() {
  for (let i = 0; i < dogSeedData.length; i++) {
    const dog = dogSeedData[i];
    return dogs.enqueue(dog);
  }
}

initSetupCats();
initSetupDogs();

console.log(JSON.stringify(cats));
console.log(JSON.stringify(dogs));

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');

const app = express();

/* ========GET ENDPOINTS ========== */
app.get('/api/cats', (req, res) => {
  res.json(peek(cats));
});

app.get('/api/dogs', (req, res) => {
  res.json(peek(dogs));
});
/* ========DELETE ENDPOINTS ========== */
app.delete('/api/cats', (req, res) => {
  res.cats.dequeue();
});

app.delete('/api/dogs', (req, res) => {
  res.dogs.dequeue();
});

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

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
