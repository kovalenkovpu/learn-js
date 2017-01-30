describe("форматирует массив обектов по заданному полю", function() {
  let users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
  }, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
  }, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
  }];
  
  it("сортировка по полю name", function() {
    let result = users.sort(byField('name'));
    
    assert.equal(result[0].name, "Вася");
    assert.equal(result[1].name, "Маша");
    assert.equal(result[2].name, "Петя");
  });
  
  it("сортировка по полю age", function() {
    let result = users.sort(byField('age'));
    
    assert.equal(result[0].age, "18");
    assert.equal(result[1].age, "20");
    assert.equal(result[2].age, "25");
  });
});