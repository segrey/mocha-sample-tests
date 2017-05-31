var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should(); //actually call the function

describe('chai', function () {
  it('should check indexOf', function () {
    [1, 2, 3].indexOf(4).should.equal(-1);
  });
  it('should pass', function () {
    expect(true).to.be.equal(true);
  });
});
