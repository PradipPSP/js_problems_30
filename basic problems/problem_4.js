
// Q. Write a function that reverses a string.

function reverseString(str){
    let reversedStr = "";
    for (let i = str.length-1; i >= 0; i--){
        reversedStr = reversedStr + str[i];
    }
    return reversedStr;
};
let revStr = reverseString("Hello");
// console.log(revStr);


const str = ['Pratim', 'Pradip', 'Moon', 'Emran', 'Protap', 'M Sabid'];
const reverseStr = str.reverse();
// console.log(reverseStr); // ["M Sabid", "Protap", "Emran", "Moon", "Pradip", "Pratim"]


/* function reverseStr2 (str5){
    let storeReversedStr = "";

    for(let i = str5.length-1; i>=0; i--){
        storeReversedStr = storeReversedStr + str5[i]
    }
    return storeReversedStr;
};

let reversedStr3 = reverseStr2('bangladesh');
console.log(reversedStr3);
*/

function myFunc(string){
    let gatherRevStr = "";
    for( let i =string.length-1; i>=0; i--){
        gatherRevStr = gatherRevStr  + string[i]
    }
    return gatherRevStr;
}
console.log(myFunc("country")); // yrtnuoc