var assert = require('assert');
var should = require('should');
var expect = require('expect.js');

xdescribe('Suite', function(){
    describe('one', function(){
        it('check 1', function(){
            (true).should.equal(false);
        })
    });
    xdescribe('two', function(){
        it('check 2', function(){
            expect(true).to.be(true);
        })
    });
    describe('three', function(){
        it('check 3', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
        })
    });
    describe('four', function(){
        it('check 4', function(){
            expect(true).to.be(false);
        })
    });
    describe('five', function(){
        it('check 5', function(){
            (bzoo).should.exist;
        })
    })
});
