require('chai').should();

describe('Array', function () {
    describe('#indexOf()', function () {
        it('fail', function (done) {
            setTimeout(function() {
                [1,2,3].indexOf(5).should.equal(1);
                done();
            }, 0);
        });
        it('pass', function () {
            [1,2,3].indexOf(5).should.equal(-1);
        });
    });

  it('compare files', function () {
    var actualFilePath = require.resolve('chai'), expectedFilePath = __filename;
    try {
      lastModifiedTime(actualFilePath).should.equal(lastModifiedTime(expectedFilePath));
    }
    catch (err) {
      err.actualFilePath = actualFilePath;
      err.expectedFilePath = expectedFilePath;
      throw err;
    }
  });
});

function lastModifiedTime(path) {
  return require('fs').statSync(path).mtime.getTime();
}
