describe("addClass", function() {

  it("добавляет класс, которого нет", function() {
    var obj = {
      className: 'open menu'
    };
    addClass(obj, 'new');
    assert.deepEqual(obj, {
      className: 'open menu new'
    });
  });

  it("не добавляет класс, который уже есть", function() {
    var obj = {
      className: 'open menu'
    };
    addClass(obj, 'open');
    assert.deepEqual(obj, {
      className: 'open menu'
    });
  });

  it("не добавляет лишних пробелов, который уже есть", function() {
    var obj = {
      className: ''
    };
    
    addClass(obj, 'open');
    assert.deepEqual(obj, {
      className: 'open'
    });
  });
  
  it("не добавляет лишних пробелов, если в элементе первый - пробел", function() {
    
    var obj = {
      className: ''
    };
    
    addClass(obj, ' open');
    assert.deepEqual(obj, {
      className: 'open'
    });
  });
  
  it("не добавляет лишних пробелов, если в элементе последний - пробел", function() {
    
    var obj = {
      className: ''
    };
    
    addClass(obj, 'open ');
    assert.deepEqual(obj, {
      className: 'open'
    });
  });
  
  it("не добавляет лишних пробелов, если в элементе много пробелов", function() {
    
    var obj = {
      className: ''
    };
    
    addClass(obj, ' open  ');
    assert.deepEqual(obj, {
      className: 'open'
    });
  });

});