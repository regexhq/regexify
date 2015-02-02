// Inspiration from 6to5 util belt.

'use strict';

var isString = require('is-string'),
  isRegExp = require('is-regex');

function regexify(val){
  if (!val) {
    return new RegExp(/.^/);
  }
  if (Array.isArray(val)) {
    val = val.join('|');
  }
  if (isString(val)) {
    return new RegExp(val);
  }
  if (isRegExp(val)) {
    return val;
  }
  throw new TypeError('illegal type: '+ val +' for regexify');
}

module.exports = regexify;
