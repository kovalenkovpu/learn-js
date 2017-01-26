describe("mapArr", function() {
  it("Returns the length of each array element", function() {
    let arr1 = ["blabla", "blablablabla", "bla"];
    
    assert.equal(mapArr(arr1)[0], 6);
    assert.equal(mapArr(arr1)[1], 12);
    assert.equal(mapArr(arr1)[2], 3);
  });
  
});