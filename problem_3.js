
// Q. Write a program to find the largest of three numbers

// way-1

const numbers = [30, 40, 50];
const descendingNum = numbers.sort((a, b) => b - a);
const largestNumber = descendingNum[0];
// console.log(largestNumber);



// way-2

const numbers2 = [40, 30, 50];
const ascendingNum = numbers2.sort((a, b) => a - b);
const largestNumber2 = ascendingNum[ascendingNum.length-1];
// console.log(largestNumber2);


// way-3

let num1 = 50;
let num2 = 25;
let num3 = 45;
// let largest = Math.max(num1, num2, num3);
// console.log('The largest number is ' + largest);


// way-4

let num4 = 80;
let num5 = 55;
let num6 = 95;

if(num4 >= num5 && num4 >= num6){
    largest = num4;
} else if(num5 >= num4 && num5 >= num6){
    largest = num5;
} else{
    largest = num6;
};

console.log('The largest number is ' + largest);

