/* describe("makeCaching", function() {

  it("запоминает предыдущее значение функции с таким аргументом", function() {
    function f(x) {
      return Math.random() * x;
    }

    f = makeCaching(f);

    let a = f(1);
    let b = f(1);
    
    assert.equal(a, b);

    let anotherValue = f(2);
    // почти наверняка другое значение
    assert.notEqual(a, anotherValue);
  });

  it("сохраняет контекст вызова", function() {
    let obj = {
      spy: sinon.spy()
    };

    let spy = obj.spy;
    obj.spy = makeCaching(obj.spy);
    obj.spy(123);
    assert(spy.calledWith(123));
    assert(spy.calledOn(obj));
  });

});
*/