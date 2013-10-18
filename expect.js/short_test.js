
var should = require('should');
var expect = require('expect.js');

xdescribe('AAA', function(){
    describe('test 1', function(){
        it('check 1', function(){
            expect(true).to.be(false);
        })
    });
    describe('test 2', function(){
        it('check 2', function(){
            (false).should.equal(true);
        })
    });
});
