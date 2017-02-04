describe("Returns min and max values of an input string", function() {
  it("Returns min of a given string", function() {
    let test1 = getMinMax("1, -5.8 или 10, хотя 34 + -5.3 и 73");
    
    assert.equal(test1.min, -5.8);
   });
});
