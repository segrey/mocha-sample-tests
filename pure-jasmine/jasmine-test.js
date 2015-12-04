var expect = require('chai').expect;
describe("suite name", function () {
  it("spec name", function () {
    var foo = {a: 42};
    foo.bar = foo.baz;
    expect(foo).to.deep.equal({a: 42});
  });
});
