
// Q. Write a function that checks if a string is a palindrome?

/* 
 প্যালিনড্রোম (Palindrome) কী?

প্যালিনড্রোম হলো এমন একটি শব্দ, সংখ্যা, বাক্য বা স্ট্রিং যা সামনে থেকে এবং পিছন থেকে একই রকম পড়া যায়। যেমন:

    শব্দ: madam, level, radar

    সংখ্যা: 121, 1331

    বাংলা শব্দ: নয়ন, মামা
 */

  /* function isPalindrome(str) {
    // স্ট্রিংটিকে ছোট অক্ষরে রূপান্তর করি এবং অপ্রয়োজনীয় স্পেস সরিয়ে ফেলি
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // রিভার্স স্ট্রিং তৈরি করি
    const reversed = str.split('').reverse().join('');
    
    // মূল স্ট্রিং এবং রিভার্স স্ট্রিং এক হলে প্যালিনড্রোম
    return str === reversed;
}

// উদাহরণ:

console.log(isPalindrome("Madam"));       // true
console.log(isPalindrome("Hello"));       // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
*/

// problem solve

function isPalindrome (str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello JS')) // false

// ব্যাখ্যা:
// .split() ফাংশনটি একটি string-কে ভেঙে array-তে রূপান্তর করে, কোনো নির্দিষ্ট separator (বিভাজক) অনুসারে।

// /[^a-z0-9]/g অর্থ RegExp (Regular Expression) যেখানে g মানে গ্লোবাল।

/* RegEx বিশ্লেষণ:
অংশ	মানে
[...]	এটা একটি character set – এর মধ্যে যা থাকে তা খোঁজা হয়
a-z	ছোট হাতের a থেকে z পর্যন্ত
0-9	ডিজিট 0 থেকে 9 পর্যন্ত
^ (caret)	NOT – মানে character set-এর মধ্যে যেগুলো নেই
g	global flag – মানে স্ট্রিং-এ যতবার মেলে, সবগুলোতে replace হবে
*/


// way_2

function reverseString(str){
    let revStr = "";
    for(let i =str.length-1; i>=0; i--){
        revStr = revStr + str[i]
    }
    return revStr;
};
// console.log(reverseString("radar"))

let mainWord = 'radar';
let reverseMainWord = reverseString(mainWord);

if(mainWord === reverseMainWord){
    console.log(`${mainWord} is palindrome`);
} else{
    console.log(`${mainWord} isn't palindrome`)
};
