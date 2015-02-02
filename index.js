// Inspiration from 6to5 util belt.

'use strict';

var util = require('util');

function regexify(val){
  if (!val) {
    return new RegExp(/.^/);
  }
  if (Array.isArray(val)) {
    val = val.join('|');
  }
  if (util.isString(val)) {
    return new RegExp(val);
  }
  if (util.isRegExp(val)) {
    return val;
  }
  throw new TypeError('illegal type: '+ val +' for regexify');
}

module.exports = regexify;
