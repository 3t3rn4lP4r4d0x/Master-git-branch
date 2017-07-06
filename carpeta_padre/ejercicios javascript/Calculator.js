//Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters
//alert("you can chose this 4operations : suma,resta,multiplicacion and division ")



function calculator(operation,num1,num2){
var result = 0
	if (operation === "suma") {
	 	 result = num1 + num2
	 	return result
	}
	 else{}

	if (operation === "resta"){
	 	 result = num1 - num2
	 	 return result
	 }
	 else{}
	 	if(operation === "multiplicacion"){
	 	  result = num1 * num2
	 	 return result
	 }
	 else{}


	 if (operation === "division"){
	  	result = num1 / num2
	 }
	 else{}

}

calculator("suma",10,5) // 15

    calculator("resta",10,5) // 5
    calculator("multiplicacion",10,5) // 50
    calculator("division",10,5) // 2


//Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters
function calculator() {
	if (arguments[0] === "suma") {
    var i, res = 0;
      for (var i = 1; i <arguments.length; i++) {
       res += arguments[i];
      
  }
  return res;
}



if (arguments[0] === "resta") {
    var i, res = 0;
      for (var i = 1; i <arguments.length; i--) {
       res += arguments[i];
      }
  
  return res;
}

	 		 	if (arguments[0] === "multiplicacion") {
    var i, res = 0;
      for (var i = 1; i <arguments.length; i*=2) {
       res += arguments[i];
      }
  
  return res;
}

	
	 		 if (arguments[0] === "division") {
    var i, res = 0;
      for (var i = 1; i <arguments.length; i/=2) {
       res += arguments[i];
      }
  
  return res;
}
}

	 

