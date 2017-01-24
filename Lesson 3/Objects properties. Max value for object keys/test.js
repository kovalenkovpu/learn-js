describe("maxSalary", function() {
  it("Returns maximum value for all keys in object", function() {
    assert.equal(maxSalary({john: 23.54, jake: 43.11}), 43.11);
  });

  it("Returns 'Object is empty' when object is empty", function() {
    assert.equal(maxSalary({}), "Object is empty");
  });
  
  it("Returns maximum when one of values is string", function() {
    assert.equal(maxSalary({john: 23.54, jake: 43.11, pete: "draft"}), 43.11);
  });
  
  it("Returns maximum when one of values is string (number)", function() {
    assert.equal(maxSalary({john: 23.54, jake: 43.11, pete: "60"}), 60);
  });
  
  it("Returns maximum when one of values is '_' ", function() {
    assert.equal(maxSalary({john: 23.54, jake: 43.11, pete: " "}), 43.11);
  });
  
  it("Returns maximum when all values are negative", function() {
    assert.equal(maxSalary({john: -23.54, jake: -43.11, pete: "-60"}), -23.54);
  });
  
});