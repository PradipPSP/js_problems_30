
// Q. Write a program to count the number of vowels in a string

//English Vowels

/* function countVowels(str) {
    // ছোট হরফে রূপান্তর করি
    str = str.toLowerCase();

    // স্বরবর্ণের তালিকা
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // কাউন্টার
    let count = 0;

    // প্রতিটি অক্ষর চেক করি
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// 🔍 উদাহরণ ব্যবহার:
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript"));  // Output: 3

🧠 ব্যাখ্যা:

    ইনপুট স্ট্রিংটি toLowerCase() দিয়ে ছোট অক্ষরে রূপান্তর করা হয়েছে।

    vowels অ্যারে-তে ইংরেজি স্বরবর্ণ রাখা হয়েছে।

    লুপের মাধ্যমে প্রতিটি অক্ষর পরীক্ষা করে দেখা হয়েছে তা vowels-এর মধ্যে আছে কিনা।

    যদি থাকে, তাহলে count বাড়ানো হয়।
*/ 

//In Bangla

// function bengaliVowelsCount(str){

//     const vowels = ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ'];
//     let count = 0;

//     for (let char of str){
//         if(vowels.includes(char)){
//              count++;
//         }
//     }
//     return count;
// }
// console.log(bengaliVowelsCount('আমি জাভাস্ক্রিপ্ট শিখতে পচ্ছন্দ করি'));
// console.log(bengaliVowelsCount('আমি গ্রাম ভালোবাসি'));

function countVowels(str){
    str.toLowerCase()

    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;

    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count;
}
console.log(countVowels('I Love My Country')); // 4 