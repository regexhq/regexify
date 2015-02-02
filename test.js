'use strict';
var assert = require('assert');
var regexify = require('./index');

it('should check for all variations...', function () {
  assert.deepEqual(regexify(undefined), /.^/);
  assert.deepEqual(regexify(false), /.^/);
  assert.deepEqual(regexify(null), /.^/);
  assert.deepEqual(regexify(''), /.^/);
  assert.deepEqual(regexify(['foo', 'bar']), /foo|bar/);
  assert.deepEqual(regexify('foobar'), /foobar/);
  assert.deepEqual(regexify(/foobar/), /foobar/);
  assert.throws(function () {
    regexify({});
  }, /illegal type:/);
});
