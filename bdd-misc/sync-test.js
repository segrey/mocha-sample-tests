describe('sync Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      [1, 2, 3].indexOf(5).should.equal(-1);
    });
    it('should return -1 when the value is not present');
    it('should find', function (done) {
        setTimeout(function() {
            [1, 2, 3].indexOf(2).should.equal(1);
        }, 5000);
    });
  });
});
