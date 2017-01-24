describe("clone", function() {
  it("clones given object and creates new one", function() {
    var user = {
      name: "Petr",
      lastname: "Ivanov",
      single: false,
      age: 25,
    };
    
    let result = clone(user);
    assert.equal(result.name, "Petr");
    assert.equal(result.lastname, "Ivanov");
    assert.equal(result.single, false);
    assert.equal(result.age, 25);
  });
  
  it("clones given object (with values as objects) and creates new one", function() {
    var user = {
      data: {
        login: "log",
        pass: "qwerty",
        id: 125455
      },
      name: "Petr",
      lastname: "Ivanov",
      single: false,
      age: 25,
      dad: {
        dadName: "Ivan",
        dadAge: 50,
        single: true
      }
    };
    let dataObj = user.data;
    let result = clone(user);
    let dadObj = user.dad;
    
    assert.equal(result.name, "Petr");
    assert.equal(result.lastname, "Ivanov");
    assert.equal(result.single, false);
    assert.equal(result.age, 25);
    assert.equal(result.data, dataObj);
    assert.equal(result.dad, dadObj);
  });
});