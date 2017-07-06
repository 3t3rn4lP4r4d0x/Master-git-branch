// max() function

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

/* Way 1 */

function max( num1, num2 ) {
  if (num1 === num2) {
    return num1
  }
  else if (num1 > num2) {
   return num1
  }
  else {
    return num2
  }

}

/* Way 2 | Using Math.max() */

function max( num1, num2 ) {
  return Math.max(num1, num2)
}


/* Way 3 */

function max( num1, num2 ) {
  return (num1 >= num2) ? num1 : num2;
}

