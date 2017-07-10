function FizzBuzz () {
  var numbers = []
  for (var i = 1; i < 101; i++) {
  	 numbers.push(i)
  }
  numbers.forEach(function (items, index) {
  	if (numbers[index] % 3 === 0) {
  		numbers[index] = 'Fizz'
  	}  	else if (numbers[index] % 5 === 0) {
  		numbers[index] = 'Buzz'
  	}
  })
  // var Fizz = numbers / 3
  // var Buzz = numbers / 5
  return numbers
}
