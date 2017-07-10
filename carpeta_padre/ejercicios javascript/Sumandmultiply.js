// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sumandmultiply () {
  var sum = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b
  })
  var multiply = [1, 2, 3, 4].reduce(function (a, b) {
    return a * b
  })

  console.log('the sum is ' + ' ' + sum)
  console.log('the multiplication is ' + ' ' + multiply)
}
