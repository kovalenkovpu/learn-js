describe("Sieve of Eratosthenes", function() {
  let arr = [];
  
  for (let i = 0; i < 10; i++) {
    arr[i] = i + 2;
  };
  
  let primes = [2, 3, 5, 7, 11];
  
  it("Простые числа от 2 до 11", function() {
    assert.equal(sieve(arr)[0], primes[0]);
    assert.equal(sieve(arr)[1], primes[1]);
    assert.equal(sieve(arr)[2], primes[2]);
    assert.equal(sieve(arr)[3], primes[3]);
  });
});