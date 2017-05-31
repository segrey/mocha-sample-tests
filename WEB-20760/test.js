'use strict';


describe('homepage', function () {

    beforeEach(function () {
        console.log('beforeEach(homepage)\n')
    });

    afterEach(function () {
        console.log('afterEach(homepage)\n')
    });

    it('should respond to GET', function (done) {
        console.log('it(homepage)\n');
        done()
    });
});

describe('todo', function () {
    after(function () {
        console.log('after(todo)\n')
    });

    beforeEach(function () {
        console.log('beforeEach(todo)\n')
    });

    afterEach(function () {
        console.log('afterEach(todo)\n')
    });

    it('should respond to GET', function (done) {
        console.log('it(todo)\n');
        done()
    });

    it('should should contain uncompleted todos', function (done) {
        console.log('it(todo)\n');
        done()
    });

    it('should should not contain completed todos', function (done) {
        console.log('it(todo)\n');
        done()
    });
});

describe('completed', function () {

    beforeEach(function () {
        console.log('beforeEach(completed)\n')
    });

    afterEach(function () {
        console.log('afterEach(completed)\n')
    });

    it('should respond to GET', function (done) {
        console.log('it(completed)\n');
        done()
    });

    it('should should contain completed todos', function (done) {
        console.log('it(completed)\n');
        done()
    });

    it('should should not contain uncompleted todos', function (done) {
        console.log('it(completed)\n');
        done()
    });
});

describe('POST', function () {
    before(function () {
        console.log('before(POST)\n')
    });

    beforeEach(function () {
        console.log('beforeEach(POST)\n')
    });

    afterEach(function () {
        console.log('afterEach(POST)\n')
    });

    it('is safe against CSRF', function (done) {
        console.log('it(POST)\n');
        done()
    });

    it('contains a CSRF token', function (done) {
        console.log('it(POST)\n');
        done()
    });
});
