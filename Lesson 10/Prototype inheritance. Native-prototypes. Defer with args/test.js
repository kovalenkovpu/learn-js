describe("Waterfall", function() {
  before(function() {
    this.clock = sinon.useFakeTimers();
  });

  it("Откладывает вызов функции, используя Function.prototype.defer", function() {
    let log = "";
    
    function f(a, b) {
      log += ( a + b );
    }
            
    f.defer(100)(1, 2);
    assert.equal(log, "");
    this.clock.tick(100);
    assert.equal(log, "3");
    f.defer(300)("hi", "bye");
    this.clock.tick(300);
    assert.equal(log, "3hibye");
  });

  after(function() {
    this.clock.restore();
  });

});