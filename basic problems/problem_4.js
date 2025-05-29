
// Q. Write a function that reverses a string.

function reverseString(str){
    let reversedStr = "";
    for (let i = str.length-1; i >= 0; i--){
        reversedStr = reversedStr + str[i];
    }
    return reversedStr;
};
let revStr = reverseString("Hello");
console.log(revStr);


const str = ['Pratim', 'Pradip', 'Moon', 'Emran', 'Protap', 'M Sabid'];
const reverseStr = str.reverse();
// console.log(reverseStr); // ["M Sabid", "Protap", "Emran", "Moon", "Pradip", "Pratim"]
