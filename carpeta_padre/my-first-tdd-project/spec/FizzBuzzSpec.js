describe('function FizzBuz', function () {
  it('should exist', function () {
    expect(FizzBuzz).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof FizzBuzz).toBe('function')
  })
  it('should be a array', function () {
    var numbers = FizzBuzz()
    expect(Array.isArray(numbers)).toBe(true)
  })
  it('array should have 100 elements', function () {
    var numbers = FizzBuzz()
    expect(numbers.length).toBe(100)
  })
  it('should return the numbers divisible by three with "Fizz"', function () {
    var numbers = FizzBuzz()
    expect(numbers[2]).toBe('Fizz')
  })
  it('should return the numbers divisible by five with "Buzz"', function () {
    var numbers = FizzBuzz()
    expect(numbers[4]).toBe('Buzz')
  })
})
