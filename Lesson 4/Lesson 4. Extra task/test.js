describe("summArg", function() {
  it("Summarizes numeric arguments of any function", function() {
    assert.equal(summArg(20, 30, 40), 90);
  });
  
  it("Summarizes numeric arguments of any function ommiting Object args", function() {
    assert.equal(summArg(20, 30, {a: 20, b: 40}, 40, {}), 90);
  });
  
  it("Summarizes numeric arguments of any function ommiting Array args", function() {
    assert.equal(summArg(20, 30, [1, 2, 3, 4], 40, []), 90);
  });
  
  it("Summarizes numeric arguments of any function ommiting Booleans", function() {
    assert.equal(summArg(20, false, 30, true), 50);
  });
  
  it("Summarizes numeric arguments of any function ommiting Strings", function() {
    assert.equal(summArg(20, 30, "0", "bla"), 50);
  });
  
  it("Summarizes numeric arguments of any function ommiting specials", function() {
    assert.equal(summArg(null, 20, undefined, 30, Infinity, 20), 70);
  });
  
  it("Summarizes numeric arguments of any function ommiting NaN", function() {
    assert.equal(summArg(20, NaN, 30, 20), 70);
  });
});