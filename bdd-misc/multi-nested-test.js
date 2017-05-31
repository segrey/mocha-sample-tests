// Run tests in definition order
// https://github.com/mochajs/mocha/issues/2684

var assert = require('assert');
var runOrder = 1;

describe('Mocha test runner', () => {
    it('1st test', function () {
        assertRunOrder(1)
        while (true) {}
    });
    describe('inner suite', () => {
        it('2nd test', () => {
            assertRunOrder(2)
        });
    });
    it('3rd test', () => {
        assertRunOrder(3)
    });
});

function assertRunOrder(expectedRunOrder) {
    assert.equal(runOrder++, expectedRunOrder);
}
