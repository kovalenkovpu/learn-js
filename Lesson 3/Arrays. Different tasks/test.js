describe("filterArr", function() {

  it("фильтрует массив в обратном порядке", function() {
    let arr = [1, -5, 10, 4, -8, 0];
    
    assert.deepEqual(filterArr(arr), [10, 4, 1, 0, -5, -8]);
  });

});

describe("filterArr2", function() {

  it("фильтрует массив", function() {
    let arr = ["HTML", "JavaScript", "CSS"];
    
    assert.deepEqual(filterArr2(arr), ["CSS", "HTML", "JavaScript"]);
  });
  
  it("фильтрует массив, не меняя исходный", function() {
    let arr = ["HTML", "JavaScript", "CSS"];
    filterArr2(arr);
    
    assert.deepEqual(arr, ["HTML", "JavaScript", "CSS"]);
  });

});