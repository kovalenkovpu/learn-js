describe("applyAll", function() {

  it("применяет функцию ко всем аргументам, начиная со 2го", function() {
    let min = applyAll(Math.min, 1, 2, 3);
    assert.equal(min, 1);
  });
  
  it("работает с собственной функцией", function() {
    function func(str) {
      return str.toUpperCase();
    };
    
    let res = applyAll(func, "js");
    assert.equal(res, "JS");
  });

  it("при отсутствии аргументов просто вызывает функцию", function() {
    let spy = sinon.spy();
    applyAll(spy);
    assert(spy.calledOnce);
    assert.equal(spy.firstCall.args.length, 0);
  });

});