
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
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello JS')) // false
