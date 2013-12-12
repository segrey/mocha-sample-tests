var expect = require('chai').expect;

describe('Suite1', function () {
  describe('inner suite', function () {
    it('should pass', function () {
      expect(true).to.be.true;
    });
  });
});
