'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('testing stand alones', () => {

  describe('testing map', () => {
    it('it should return [2, 4, 6]', () => {
      let result = fp.map([1,2,3], n => n * 2);
      expect(result).toEqual([2,4,6]);
    });
  });
  describe('testing map again', () => {
    it('it should return [4, 8, 12]', () => {
      let result = fp.map([2,4,6], n => n * 2);
      expect(result).toEqual([4,8,12]);
    });
  });
  describe('testing filter', () => {
    it('it should return 5', () => {
      let result = fp.filter([5,6,7], n => n < 6);
      expect(result).toEqual([5]);
    });
  });
  describe('testing filter again', () => {
    it('it should return 6', () => {
      let result = fp.filter([4,5,6], n => n > 5);
      expect(result).toEqual([6]);
    });
  });
  describe('testing reduce', () => {
    it('it should return 10', () => {
      let result = fp.reduce([2,3,5], [(a, c) => a + c]);
      expect(result).toEqual(10);
    });
  });
  describe('testing reduce again', () => {
    it('it should return 16', () => {
      let result = fp.reduce([3,7,6], [(a, c) => a + c]);
      expect(result).toEqual(16);
    });
  });
  describe('testing concat', () => {
    it('it should return [0,1,2,3,4,5]', () => {
      let result = fp.concat([0,1,2],[3,4,5]);
      expect(result).toEqual([0,1,2,3,4,5]);
    });
  });
  describe('testing concat again', () => {
    it('it should return [5,6,7,8,9,10]', () => {
      let result = fp.concat([5,6,7],[8,9,10]);
      expect(result).toEqual([5,6,7,8,9,10]);
    });
  });
  describe('testing splice', () => {
    it('it should return [4, 5, 6, 7]', () => {
      let arr = [4, 5, 6];
      fp.splice(arr, [3, 0, 7]);
      expect(arr).toEqual([4, 5, 6, 7]);
    });
  });
  describe('testing splice again', () => {
    it('it should return [0, 9, 2, 5, 8, 9]', () => {
      let arr = [0, 9, 2, 5, 8];
      fp.splice(arr, [5, 0, 9]);
      expect(arr).toEqual([0, 9, 2, 5, 8, 9]);
    });
  });
});
