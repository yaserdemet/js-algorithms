let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let operator = prompt("Enter operator");

function calculator(num1,num2,operator){
  if(operator == "+"){
    return num1 + num2;
  }
  else if(operator == "-"){
    return num1 - num2;
  }
  else if(operator == "*"){
    return num1 * num2;
  }
  else if(operator == "/"){
    return num1 / num2;
  }
  else if(operator == "%"){
    return num1 % num2;
  }
  else{
    return "Invalid operator";
  }
}

let result = calculator(num1,num2,operator);
console.log(result);