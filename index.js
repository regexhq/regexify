// Inspiration from 6to5 util belt.

'use strict';

var util = require('util')
  ,isString = function (val) {
      return (Object.prototype.toString.call(val) === '[object String]');
  }
  ,escapeStringRegexp = function(str){
      return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
  };

function regexify(val){
  if (!val) {
    return new RegExp(/.^/);
  }
  if (Array.isArray(val)) {
    val = val.map(function(val){
            return escapeStringRegexp(val)
          }).join('|');
    return new RegExp(val);
  }
  if (isString(val)) {
    return new RegExp(escapeStringRegexp(val));
  }
  if (util.isRegExp(val)) {
    return val;
  }
  throw new TypeError('illegal type: '+ val +' for regexify');
}

module.exports = regexify;
