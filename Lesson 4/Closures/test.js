describe("Sum", function() {
  it("суммирует входные параметры функции, переданные последовательно \n друг за другом", function() {
    assert.equal(sum(4)(2.24), 6.24);
    assert.equal(sum(20)(-8), 12);
  });
});