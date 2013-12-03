var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should(); //actually call the function

describe('chai', function () {
  it('should', function () {
    [1, 2, 3].indexOf(4).should.equal(-1);
  });
  it('expect', function () {
    expect(true).to.be.equal(true);
  });
  it('assert', function () {
    assert.equal(-1, [1, 2, 3].indexOf(5));
  });
});
