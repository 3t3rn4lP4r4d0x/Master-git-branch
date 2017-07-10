describe('function gradeBook', function () {
  it('should exist', function () {
    expect(gradeBook).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof gradeBook).toBe('function')
  })
  it('should return a string', function () {
    var result = gradeBook(95, 92, 93)
    expect(typeof result).toBe('string')
  })
  it('should return a string "A" when gradeBook(95,92,93)', function () {
    var currentResult = gradeBook(95, 92, 93)
    var expectedResult = 'A'
    expect(currentResult).toBe(expectedResult)
  })
  it('should return a string "B" when gradeBook(85,82,83)', function () {
    var currentResult = gradeBook(85, 82, 83)
    var expectedResult = 'B'
    expect(currentResult).toBe(expectedResult)
  })
  it('should return a string "C" when gradeBook(75,72,73)', function () {
    var currentResult = gradeBook(75, 72, 73)
    var expectedResult = 'C'
    expect(currentResult).toBe(expectedResult)
  })
  it('should return a string "D" when gradeBook(65,62,63)', function () {
    var currentResult = gradeBook(65, 62, 63)
    var expectedResult = 'D'
    expect(currentResult).toBe(expectedResult)
  })
  it('should return a string "F" when gradeBook(25,22,23)', function () {
    var currentResult = gradeBook(25, 22, 23)
    var expectedResult = 'F'
    expect(currentResult).toBe(expectedResult)
  })
  it('should return a grade1 if grade2 and grade3 = 50', function () {
    var currentResult = grade1 = 40
    var expectedResult = grade1 = 40, grade2 = 50, grade3 = 50
    expect(currentResult).toBe(expectedResult)
  })

  it('should return no grade if the average is < 0', function () {
    var currentResult = gradeBook(-1, -1, -1)
    var expectedResult = 'no grade'
    expect(currentResult).toBe(expectedResult)
  })
})
