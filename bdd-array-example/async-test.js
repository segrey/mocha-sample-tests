describe('Array', function(){
  describe('#indexOf()', function(){
    it("my error", function () {
      a.a = 1;
    });
    it("my fail", function () {
      [1,2,3].indexOf(5).should.equal(1);
    });
    it("my async fail", function (done) {
      setTimeout(function() {
        [1,2,3].indexOf(5).should.equal(1);
        [1,2,3].indexOf(5).should.equal(1);
        done();
      }, 0);
    });
    it('my pass', function () {
      [1,2,3].indexOf(5).should.equal(-1);
    });
    it('my function cmp', function () {
      var f = function () {};
      var o = {};
      o.should.equal(f);
    });
  });
});
