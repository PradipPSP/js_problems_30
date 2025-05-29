
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

alert(calculate(num1, num2));