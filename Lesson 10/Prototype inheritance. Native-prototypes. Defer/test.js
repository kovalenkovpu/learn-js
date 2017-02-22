describe("Waterfall", function() {
  before(function() {
    this.clock = sinon.useFakeTimers();
  });

  it("Откладывает вызов функции, используя Function.prototype.defer", function() {
    let log = "";
    
    function foo() {
      log = log + "bla...";
    };
            
    foo.defer(100);
    assert.equal(log, "");
    this.clock.tick(100);
    assert.equal(log, "bla...");
    foo.defer(300);
    this.clock.tick(300);
    assert.equal(log, "bla...bla...");
  });

  after(function() {
    this.clock.restore();
  });

});