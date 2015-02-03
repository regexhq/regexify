# node-regexify

[![Build Status](https://travis-ci.org/hemanth/regexify.svg)](https://travis-ci.org/hemanth/regexify) [![npm version](https://badge.fury.io/js/regexify.svg)](http://badge.fury.io/js/regexify)
> Regex everything! Well...almost ;)

## Installation

`npm install regexify --save`

## Example usage:

```js
var regexify = require('regexify');
var assert = require('assert');

assert.deepEqual(regexify(undefined), /.^/);
assert.deepEqual(regexify(false), /.^/);
assert.deepEqual(regexify(null), /.^/);
assert.deepEqual(regexify(''), /.^/);
assert.deepEqual(regexify(['foo', 'bar']), /foo|bar/);
assert.deepEqual(regexify('foobar'), /foobar/);
assert.deepEqual(regexify(/foobar/), /foobar/);
```
