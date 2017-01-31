describe("Returns min and max values of an input string", function() {
  it("Returns min of a given string", function() {
    let test1 = getMinMax("1, -5.8 или 10, хотя 34 + -5.3 и 73");
    
    assert.equal(test1.min, -5.8);
   });
  
  it("Returns max of a given string", function() {
    let test2 = getMinMax("1, -5.8 или 10, хотя 34 + -5.3 и 73");
    
    assert.equal(test2.max, 73);
  });
  
});

describe("Works when given special values", function() {
  it("Works fine when null is in string", function() {
    let test3 = getMinMax("1, -5.8 или null, хотя 34 + -5.3, null и 73");
    
    assert.equal(test3.min, -5.8);
   });
  
  it("Works fine when undefined is in string", function() {
    let test4 = getMinMax("undefined, -5.8 или 10, хотя undefined 34 + -5.3 и 73");
    
    assert.equal(test4.max, 73);
  });
  
  it("Works fine when NaN is in string", function() {
    let test5 = getMinMax("NaN +75 равно 11 минус -5");
    
    assert.equal(test5.max, 75);
  });
  
  
});