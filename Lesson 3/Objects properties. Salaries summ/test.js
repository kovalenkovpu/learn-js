describe("salsSumm", function() {
  it("Returns summ for all values", function() {
    assert.equal(salsSumm({john: 23.54, jake: 43.11}), 66.65);
  });

  it("Returns 0 if object is empty", function() {
    assert.equal(salsSumm({}), 0);
  });
  
  it("Returns summ when one of values is string", function() {
    assert.equal(salsSumm({john: 23.54, jake: 43.11, pete: "draft"}), 66.65);
  });
  
  it("Returns summ when one of values is string (number)", function() {
    assert.equal(salsSumm({john: 23.54, jake: 43.11, pete: "10"}), 76.65);
  });
  
  it("Returns summ when one of values is '_' ", function() {
    assert.equal(salsSumm({john: 23.54, jake: 43.11, pete: " "}), 66.65);
  });
  
});