function rockPaperScissors(movePlayer1, movePlayer2) {

  var movePlayers = movePlayer1 + ' vs ' + movePlayer2
  var winnerMove = ''

  if (movePlayer1 === 'PAPER') {
    if (movePlayer2 === 'ROCK') winnerMove = 'PAPER wins!'
    if (movePlayer2 === 'SCISSORS') winnerMove = 'SCISSORS wins!'
    if (movePlayer2 === 'PAPER') winnerMove = 'tie!'
  }

  if (movePlayer1 === 'SCISSORS') {
    if (movePlayer2 === 'ROCK') winnerMove = 'ROCK wins!'
    if (movePlayer2 === 'SCISSORS') winnerMove = 'tie!'
    if (movePlayer2 === 'PAPER') winnerMove = 'SCISSORS wins!'
  }
  return movePlayers + " => " + winnerMove
}