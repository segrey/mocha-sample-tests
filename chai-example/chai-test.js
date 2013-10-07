var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should;

describe('Suite', function(){
  xdescribe('#indexOf()', function(){
    it('we check should', function(){
      [1,2,3].indexOf(4).should.equal(-1);
    });
  });
  xdescribe('check expect', function(){
    it('we check expect', function(){
      expect(true).toBe(true);
    })
  });
  describe('#indexOf()1', function(){
    it('we check assert', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
    })
  })
});
