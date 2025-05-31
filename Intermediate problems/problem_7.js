
// Q. Write a program to implement a basic calculator using switch case.

function calculator (a, b, operator) {
    let result;

    switch(operator){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if(b !== 0){
                result = a / b;
            } else{
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Invalid Operator';
    }
    return result;
};
console.log(calculator(5, 8, '*'));




/*
let tell = prompt("What would you  like to do (*,/,+,-)");
let num1 = prompt("Enter first Number");
let num2 = prompt("Enter second Number");

function calculate(a,b) {
    let answer = tell;
    switch (a, b) {
        case "*":
            answer = a * b;
            break;
        case "/":
            answer = a / b;
            break;
        case "+":
            answer = a + b;
            break;
        case "-":
            answer = a - b;
            break
    }
}

alert(calculate(num1, num2))
*/