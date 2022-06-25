
/* creating a calculator using js */
var operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
/* accept the number from the user through prompt box   */
var number1 = parseFloat(prompt ('Enter first number: '));  
var number2 = parseFloat(prompt ('Enter  second number: '));
  
let result;
/* declaration of the variable.  */

if (operator == '+') { // use + (addition) operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = number1 - number2;  
}  
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = number1 * number2;  
}  
else if {  
    result = number1 / number2; // use / (division) operator to divide two numbers  
} 
else {
    console.log("you choosed a wrong operator please re-enter operator :)")
} 
  
// display the result of the Calculator  
window.alert(" Result is" + result);  

