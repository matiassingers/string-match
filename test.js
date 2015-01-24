'use strict';

var assert = require('assert');
var stringMatch = require('./');

describe('stringMatch', function() {

  describe('match found', function() {
    it('should return the first match for a string', function() {
      var match = stringMatch('this is a test', 'test');
      assert.equal(match, 'test');
    });

    it('should return the first match for a RegExp', function() {
      var match = stringMatch('this is a test', /test/);
      assert.equal(match, 'test');
    });
  });

  describe('no match found', function() {
    it('should return empty string when no match for a string', function() {
      var match = stringMatch('this is a test', 'foo');
      assert.equal(match, '');
    });

    it('should return empty string when no match for a RegExp', function() {
      var match = stringMatch('this is a test', /foo/);
      assert.equal(match, '');
    });
  });
});
