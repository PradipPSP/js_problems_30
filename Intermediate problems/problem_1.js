
// Q. Write a function to find the second largest number in an array.

// way-1
const numbers = [50, 40, 30, 90, 100, 60, 90]
const descendingArray = numbers.sort((a, b) => b - a); //
// console.log(descendingArray); // [100, 90, 90, 60, 50, 40, 30]
const secondLargeNum = descendingArray[1];
// console.log(secondLargeNum); // 90


// way-2
const numbers2 = [50, 40, 30, 90, 100, 60, 90]
const descendingArray2 = numbers2.sort((a, b) => a - b); 
const secondLargeNum2= descendingArray2[descendingArray.length-2];
console.log(secondLargeNum2); // 90



// way-3

const numberArray = [10, 15, 100, 85, 5, 80]
const sortArray = numberArray.slice().sort((a, b) => b - a);
// console.log(sortArray); // [100, 85, 80, 15, 10, 5]
let secondLarge = null;
for(let i = 1; i < sortArray.length; i++){
    if(sortArray[i] < sortArray[0]){
        secondLarge = sortArray[i];
        break;
    }
};
// console.log("Second largest element:", secondLarge !== null ? secondLarge : "No second largest element");


/* নিচের জাভাস্ক্রিপ্ট কোডটি একটি অ্যারের মধ্যে দ্বিতীয় সর্বোচ্চ (second largest) মান বের করার জন্য লেখা হয়েছে। নিচে প্রতিটি লাইনের ব্যাখ্যা বাংলা ভাষায় দেওয়া হলো:

const a = [10, 5, 20, 8, 20, 15];

এই লাইনটিতে একটি অ্যারে a ঘোষণা করা হয়েছে, যার মধ্যে কিছু সংখ্যা রয়েছে।

const sort = a.slice().sort((a, b) => b - a);

    a.slice() অ্যারেটির একটি কপি তৈরি করে, যাতে মূল অ্যারে পরিবর্তিত না হয়।

    sort((a, b) => b - a) অংশটি অ্যারেটিকে বড় থেকে ছোট (descending order) অনুযায়ী সাজায়।

    ফলে sort নামের নতুন অ্যারেটিতে সংখ্যাগুলো সবচেয়ে বড় থেকে সবচেয়ে ছোট ক্রমে থাকবে।

let sec = null;

এই লাইনে একটি ভ্যারিয়েবল sec ঘোষণা করা হয়েছে, যার প্রাথমিক মান null রাখা হয়েছে। এটি পরবর্তীতে দ্বিতীয় সর্বোচ্চ মান রাখবে।

for (let i = 1; i < sort.length; i++) {
    if (sort[i] < sort[0]) { 
        sec = sort[i];
        break;
    }
}

    এই for লুপটি সাজানো অ্যারেটির দ্বিতীয় থেকে শেষ পর্যন্ত ঘুরে।

    sort[0] হচ্ছে সর্বোচ্চ মান।

    যখন এমন একটি উপাদান পাওয়া যাবে যেটি sort[0] এর থেকে ছোট (মানে দ্বিতীয় সর্বোচ্চ মান), তখন সেই মানটি sec ভ্যারিয়েবলে সংরক্ষণ করে break করে লুপ থামিয়ে দেওয়া হয়।

console.log("Second largest element:", sec !== null ? sec : "No second largest element");

    যদি sec এর মান null না হয়, তাহলে সেটিকে কনসোলে প্রিন্ট করা হয়।

    আর যদি null থাকে (মানে দ্বিতীয় সর্বোচ্চ মান খুঁজে পাওয়া যায়নি), তাহলে "No second largest element" দেখানো হয়।

সারসংক্ষেপ:

এই কোডটি একটি সংখ্যার তালিকা থেকে দ্বিতীয় সর্বোচ্চ সংখ্যা খুঁজে বের করে এবং তা প্রিন্ট করে। যদি সব সংখ্যা একই হয়, তাহলে "No second largest element" দেখায়।
*/