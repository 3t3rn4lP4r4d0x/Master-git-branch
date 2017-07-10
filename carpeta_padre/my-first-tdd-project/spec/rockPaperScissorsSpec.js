describe('function rockPaperScissors', function() {

  it('should exist', function() {
    expect(rockPaperScissors).toBeDefined()
  });

  it('should be a function', function() {
    expect(typeof rockPaperScissors).toBe('function')
  });

  it('should return a string ', function() {
    var result = rockPaperScissors('PAPER','PAPER')
    expect(typeof result).toBe('string')
  });

  describe('should return the move in the string returned', function() {

    it('should return "PAPER vs ROCK" when rockPaperScissors("PAPER", "ROCK")', function() {
      var movePlayer1 = 'PAPER'
      var movePlayer2 = 'ROCK'
      var result = rockPaperScissors(movePlayer1, movePlayer2)
      var textToCheck = movePlayer1 + ' vs ' + movePlayer2
      var expectedResult = result.includes(textToCheck)
      expect( expectedResult ).toBeTruthy()
    });

    it('should return "PAPER vs SCISSORS" when rockPaperScissors("PAPER", "SCISSORS")', function() {
      var movePlayer1 = 'PAPER'
      var movePlayer2 = 'SCISSORS'
      var result = rockPaperScissors(movePlayer1, movePlayer2)
      var textToCheck = movePlayer1 + ' vs ' + movePlayer2
      var expectedResult = result.includes(textToCheck)
      expect( expectedResult ).toBeTruthy()
    });

  })

  describe('should return the winner move in the string returned', function() {

       it('should return "PAPER wins!" when rockPaperScissors("PAPER", "ROCK")', function() {
        var movePlayer1 = 'PAPER'
        var movePlayer2 = 'ROCK'
        var result = rockPaperScissors(movePlayer1, movePlayer2)
        var expectedResult = result.includes("PAPER wins!")
        expect( expectedResult ).toBeTruthy()
      });

      it('should return "SCISSORS wins!" when rockPaperScissors("SCISSORS", "PAPER")', function() {
        var movePlayer1 = 'SCISSORS'
        var movePlayer2 = 'PAPER'
        var result = rockPaperScissors(movePlayer1, movePlayer2)
        var expectedResult = result.includes("SCISSORS wins!")
        expect( expectedResult ).toBeTruthy()
      });

  })


rockPaperScissors("PAPER","SCISSORS")
});
