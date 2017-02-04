var calculator;
before(function() {
  calculator = new Calculator;
});

describe("Calculator with new operations insert", function() {
  it("calculate(12 + 34) = 46", function() {
    assert.equal(calculator.calculate("12 + 34"), 46);
  });
  
  it("calculate(34 - 12) = 22", function() {
    assert.equal(calculator.calculate("34 - 12"), 22);
  });
  
  it("добавили умножение: calculate(2 * 3) = 6", function() {
    calculator.addMethod("*", function(a, b) {
      return a * b;
    });
    assert.equal(calculator.calculate("2 * 3"), 6);
  });
  
  it("добавили возведение в степень: calculate(2 ** 3) = 8", function() {
    calculator.addMethod("**", function(a, b) {
      return Math.pow(a, b);
    });
    assert.equal(calculator.calculate("2 ** 3"), 8);
  });
});

describe("Tracks input errors", function() {
  it("Введена строка 'bla * 45', выводит ошибку ввода: 'Вы ввели не цифры'", function() {
    assert.equal(calculator.calculate("bla * 45"), "Вы ввели не цифры");
  });
  
  it("Введена строка '4 * 5 - 3', выводит ошибку ввода: 'В строке больше 3х слагаемых'", function() {
    assert.equal(calculator.calculate("4 * 5 - 3"), "В строке больше 3х слагаемых");
  });
});