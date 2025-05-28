
// Q. Write a function to calculate the factorial of a number? 
// fact(5) এর মান হবে:
// ১ × ২ × ৩ × ৪ × ৫ = ১২০


// function fact(n) { // এটি একটি ফাংশন যার নাম fact এবং এটি একটি প্যারামিটার n গ্রহণ করে। এখানে n হল সেই সংখ্যা যার ফ্যাক্টরিয়াল গণনা করা হবে।
//     let res = 1; // এখানে res নামের একটি ভ্যারিয়েবল তৈরি করা হয়েছে এবং এর প্রাথমিক মান রাখা হয়েছে ১। এটি পরে ফ্যাক্টরিয়ালের ফলাফল ধারণ করবে।
//     for (let i = 1; i <= n; i++) { // এই for লুপটি ১ থেকে শুরু হয়ে n পর্যন্ত চলবে।
//         res *= i; // প্রতিবার লুপ চালানোর সময় res এর সাথে i গুণ করা হবে। মানে, res = res * i;।
//     }
//     return res;
// }
// console.log(fact(7));

// Fresh Code

function fact(n){
    let result = 1;
        for(let i = 1; i <= n; i++){
            result *= i; 
        }
    return result
};
console.log(fact(7));
