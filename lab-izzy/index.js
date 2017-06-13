'use strict';

const goat = require('./lib/fp.js');

const commandLine = module.exports = () => {
  let puppy = process.argv;
  puppy = goat.map(puppy, pig => pig.toUpperCase());
  console.log(puppy);
  return puppy;
};

commandLine();
