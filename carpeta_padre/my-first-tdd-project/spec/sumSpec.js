describe('function sum', function () {
  it('should exist', function () {
    expect(sum).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof sum).toBe('function')
  })

  it('should return a number', function () {
    var result = sum(2, 5)
    expect(typeof result).toBe('number')
  })

  it('should return 5  when sum(2,3)', function () {
    var result = sum(2, 5)
    expect(result).toBe(7)
  })

  it('should return 10  when sum(7,3)', function () {
    var result = sum(7, 3)
    expect(result).toBe(10)
  })
  it('should return 10  when sum("7",3)', function () {
    var result = sum('7', 3)
    expect(result).toBe(10)
  })
})
