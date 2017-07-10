describe('function drinkAbout', function () {
  it('should exist', function () {
    expect(drinkAbout).toBeDefined()
  })

  it('should be a function', function () {
    expect(typeof drinkAbout).toBe('function')
  })

  it('should return a string', function () {
    expect(typeof drinkAbout(2)).toBe('string')
  })

  it('should return "drink toddy" when drinkAbout(13)', function () {
    expect(drinkAbout(14)).toBe('drink toddy')
  })

  it('should return "drink coke" when drinkAbout(17)', function () {
    expect(drinkAbout(17)).toBe('drink coke')
  })

  it('should return "drink beer" when drinkAbout(18)', function () {
    expect(drinkAbout(18)).toBe('drink beer')
  })

  it('should return "drink whisky" when drinkAbout(30)', function () {
    expect(drinkAbout(30)).toBe('drink whisky')
  })
})
