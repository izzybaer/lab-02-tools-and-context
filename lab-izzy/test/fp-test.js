'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('testing stand alones', () => {

  describe('testing map', () => {
    it('it should return 2, 4, 6', () => {
      let result = fp.map([1,2,3], n => n * 2);
      expect(result).toEqual(2, 4, 6);
    });
  });
});
