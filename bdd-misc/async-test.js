describe('async Array ', function () {
  describe('#indexOf()', function () {
    it("fail", function (done) {
      setTimeout(function() {
        [1,2,3].indexOf(5).should.equal(1);
        done();
      }, 0);
    });
    it('pass', function () {
      [1,2,3].indexOf(5).should.equal(-1);
    });
  });
});
