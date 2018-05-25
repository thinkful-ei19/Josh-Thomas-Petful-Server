'use strict';
const catSeedData = [
  // {
  //   imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  //   imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  //   name: 'Fluffy',
  //   sex: 'Female',
  //   age: 2,
  //   breed: 'Bengal',
  //   story: 'Thrown on the street'
  // },
  {
    imageURL: 'http://loremflickr.com/320/240/cat',
    imageDescription: 'Cute Cat',
    name: 'Whiskers',
    gender: 'Female',
    age: 20,
    breed: 'MaineCoon',
    story: 'Abandoned by previous owner'
  },
  {
    imageURL: 'http://loremflickr.com/322/240/cat',
    imageDescription: 'Cute Cat',
    name: 'Tom',
    gender: 'Female',
    age: 6,
    breed: 'Persian',
    story: 'Abandoned by previous owner'
  },
  {
    imageURL: 'http://loremflickr.com/323/240/cat',
    imageDescription: 'Exotic Cat',
    name: 'Fluffy',
    gender: 'Male',
    age: 8,
    breed: 'AmericanShorthair',
    story: 'Owner moved to another country'
  },
  {
    imageURL: 'http://loremflickr.com/324/240/cat',
    imageDescription: 'Exotic Cat',
    name: 'Fluffy',
    gender: 'Male',
    age: 12,
    breed: 'Persian',
    story: 'Owner Died'
  },
  {
    imageURL: 'http://loremflickr.com/325/240/cat',
    imageDescription: 'Loving Cat',
    name: 'Baby',
    gender: 'Male',
    age: 0,
    breed: 'tabby',
    story: 'Stray'
  },
  {
    imageURL: 'http://loremflickr.com/326/240/cat',
    imageDescription: 'Beautiful Coat',
    name: 'MrKitty',
    gender: 'Male',
    age: 12,
    breed: 'Balinese',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'http://loremflickr.com/327/240/cat',
    imageDescription: 'Playful Cat',
    name: 'Whiskers',
    gender: 'Male',
    age: 3,
    breed: 'AmericanShorthair',
    story: 'Stray'
  },
  {
    imageURL: 'http://loremflickr.com/328/240/cat',
    imageDescription: 'Loving Cat',
    name: 'Max',
    gender: 'Female',
    age: 19,
    breed: 'bengal',
    story: 'Owner moved to another country'
  },
  {
    imageURL: 'http://loremflickr.com/329/240/cat',
    imageDescription: 'Cute Cat',
    name: 'Tigger',
    gender: 'Female',
    age: 11,
    breed: 'bengal',
    story: 'Abandoned by previous owner'
  },
  {
    imageURL: 'http://loremflickr.com/330/240/cat',
    imageDescription: 'Beautiful Coat',
    name: 'Coco',
    gender: 'Female',
    age: 19,
    breed: 'MaineCoon',
    story: 'Thrown on the street'
  }
];
const dogSeedData = [
  // {
  //   imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  //   imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  //   name: 'Zeus',
  //   sex: 'Male',
  //   age: 3,
  //   breed: 'Golden Retriever',
  //   story: 'Owner Passed away'
  // },
  {
    imageURL: 'http://loremflickr.com/321/240/dog',
    imageDescription: 'Good Boy',
    name: 'Hope',
    gender: 'Female',
    age: 12,
    breed: 'Pitbull',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'http://loremflickr.com/323/240/dog',
    imageDescription: 'Great to have with kids',
    name: 'Bailey',
    gender: 'Male',
    age: 10,
    breed: 'Great Dane',
    story: 'Owner Died'
  },
  {
    imageURL: 'http://loremflickr.com/324/240/dog',
    imageDescription: 'Brown coat straight hair',
    name: 'Morgan',
    gender: 'Male',
    age: 9,
    breed: 'Poodle',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'http://loremflickr.com/325/240/dog',
    imageDescription: 'Tall build with short black coat',
    name: 'Scooby',
    gender: 'Female',
    age: 17,
    breed: 'German Shepard',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'http://loremflickr.com/326/240/dog',
    imageDescription: 'Brown coat straight hair',
    name: 'Morgan',
    gender: 'Male',
    age: 2,
    breed: 'German Shepard',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'http://loremflickr.com/327/240/dog',
    imageDescription: 'Brown coat straight hair',
    name: 'Buddy',
    gender: 'Female',
    age: 3,
    breed: 'Great Dane',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'http://loremflickr.com/328/240/dog',
    imageDescription: 'Curly blonde coat',
    name: 'Charlie',
    gender: 'Female',
    age: 7,
    breed: 'Bulldog',
    story: 'Owner Died'
  },
  {
    imageURL: 'http://loremflickr.com/329/240/dog',
    imageDescription: 'Good Boy',
    name: 'Rover',
    gender: 'Male',
    age: 20,
    breed: 'Husky',
    story: 'Owner Died'
  },
  {
    imageURL: 'http://loremflickr.com/388/240/dog',
    imageDescription: 'Great to have with kids',
    name: 'Charlie',
    gender: 'Male',
    age: 14,
    breed: 'Bulldog',
    story: 'Owner moved to another country'
  },
  {
    imageURL: 'http://loremflickr.com/319/240/dog',
    imageDescription: 'Tall build with short black coat',
    name: 'Bailey',
    gender: 'Female',
    age: 0,
    breed: 'Golden Retreiver',
    story: 'Thrown on the street'
  }
];

module.exports = {catSeedData, dogSeedData};