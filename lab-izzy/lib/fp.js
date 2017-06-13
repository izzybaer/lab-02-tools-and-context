'use strict';

const fp = module.exports = {};

fp.map = (list, callback) => Array.prototype.map.call(list, callback);

fp.filter = (list, callback) => Array.prototype.filter.call(list, callback);

fp.reduce = (acc, curr) => Array.prototype.reduce.apply(acc, curr);

fp.concat = (arr, arr2) => Array.prototype.concat.apply(arr, arr2);

fp.splice = (list, args) => Array.prototype.splice.apply(list, args);
