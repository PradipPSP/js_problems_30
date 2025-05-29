
// Q.  Write a program to find the square of a number.;

let numbers = 8;
let square = numbers ** 2;
// console.log(square); //64

let number = 7;
let squared = Math.pow(number, 2);
// console.log(squared); //49

let number2 = 2;
let threePower = Math.pow(number2, 3);
// console.log(threePower); // 8

function squaredNum(num){
    return num * num;
};
// console.log(squaredNum(11)); // 121


function squareArray(arr) { 
  return arr.map(function(num){
      return num ** 2
  })
}

console.log(squareArray([2, 4, 5, 5, 5]));


// 2nd way

const arr = [2, 4, 6, 8, 5, 3];

    function squareArray(arr) { 
        return arr.map(function(num){
            return num ** 3
  })
}

console.log(squareArray(arr));
console.log(arr);






