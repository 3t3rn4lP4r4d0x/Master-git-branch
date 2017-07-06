// Calculation

// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

// Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


/* Way 1 */

function multiplesOf23() {

  var sum = 0;
  var result = ''

  for (var i=23; i<=500; i+=23) {
    result += i + '\t'
    sum += i
  }

  console.log('Elements: ' + result);
  console.log('Sum: ' + sum);
}


/* Way 2 */

function multiples(){
  var sum = 0;
  var elements = "";
  for( var i=0; i <= 500; i++ ){
    if (i%23 === 0) {
      sum += i;
      elements += i + '\t'
    }
  }
  console.log('Elements : ' + elemets);
  console.log('Sum : ' + total_sum);
}

