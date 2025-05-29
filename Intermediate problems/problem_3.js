
// Q. Remove Duplicate Elements from JavaScript Array

// way-1

let numArray = [ 3, 4, 3, 5, 7, 6, 7, 5, 9, 1];

let setArray = new Set(numArray); // Create set of unique values using Set constructor

let removeDuplicate = [...setArray]

// console.log(removeDuplicate);

// way-2

const array = [10, 20, 20, 30, 40, 40, 50];
let removedSameElement = array.filter((item, index) => array.indexOf(item) === index);
console.log(removedSameElement);


// ব্যাখ্যাঃ

/* এখানে কী হচ্ছে একে একে দেখা যাক:

    array.filter(...) → অ্যারেটির প্রতিটি উপাদানের উপর ফিল্টার প্রয়োগ করে একটি নতুন অ্যারে তৈরি করে, যেখানে নির্দিষ্ট শর্ত পূরণ করা উপাদানগুলোই থাকবে।

    item → অ্যারের বর্তমান উপাদান (যে উপাদানটি ফিল্টার করা হচ্ছে)।

    index → ঐ উপাদানটির ইনডেক্স।

    array.indexOf(item) → অ্যারে array-তে item যেখান থেকে প্রথমবার পাওয়া গেছে, তার ইনডেক্স রিটার্ন করে।

    array.indexOf(item) === index → এই শর্তটি যাচাই করে, item এই প্রথমবারেই কি পাওয়া যাচ্ছে কিনা।

👉 যদি কোনো উপাদান প্রথমবার পাওয়া যায়, তাহলে a.indexOf(item) এবং বর্তমান index একই হবে — তখন সেই উপাদান রাখা হবে।

👉 কিন্তু যদি কোনো উপাদান আগে দেখা হয়ে থাকে (মানে এটি ডুপ্লিকেট), তাহলে a.indexOf(item) আগের ইনডেক্স রিটার্ন করবে, যা index এর থেকে ছোট হবে — তখন সেটি বাদ পড়বে।

*/

var arr = [2, 2, 4, 4, 6, 6]

function removeDuplicates (data){
    let unique = [];
    data.forEach(element => {
        if (!unique.includes(element)){
            unique.push(element);
        }
    })
    return unique;
}
console.log(removeDuplicates(arr));

/*
ব্যাখ্যা বাংলায়:

    var arr = [2, 2, 4, 4, 6, 6];

        এখানে একটি অ্যারে (arr) তৈরি করা হয়েছে, যার মধ্যে কিছু সংখ্যার পুনরাবৃত্তি (duplicate) আছে — যেমন 2, 4, 6 প্রতিটিই দুইবার করে আছে।

    function removeDuplicates(data) { ... }

        এটি একটি ফাংশন, যার নাম removeDuplicates — এর কাজ হলো কোন অ্যারে থেকে ডুপ্লিকেট মানগুলো সরিয়ে দেওয়া এবং শুধু ইউনিক মানগুলো রেখে দেওয়া।

    let unique = [];

        এখানে একটি খালি অ্যারে unique তৈরি করা হয়েছে, যাতে ইউনিক মানগুলো রাখা হবে।

    data.forEach(element => { ... })

        এখানে forEach লুপ ব্যবহার করে data অ্যারেটির প্রতিটি উপাদান (element) ঘুরে দেখা হচ্ছে।

    if (!unique.includes(element))

        চেক করা হচ্ছে যে element টি আগে unique অ্যারেতে আছে কি না। যদি না থাকে (অর্থাৎ নতুন হয়), তাহলে সেটি unique অ্যারেতে যুক্ত করা হবে।

    unique.push(element);

        যদি উপাদানটি unique অ্যারেতে না থাকে, তাহলে push() মেথড দিয়ে সেটিকে unique তে যোগ করা হচ্ছে।

    return unique;

        সব উপাদান ঘুরে দেখা শেষ হলে, শুধুমাত্র ইউনিক মানসমূহের একটি অ্যারে রিটার্ন করা হচ্ছে।

    console.log(removeDuplicates(arr));

        এখানে removeDuplicates ফাংশনটি arr অ্যারেতে চালানো হয়েছে এবং রেজাল্ট কনসোলে প্রিন্ট করা হয়েছে।

আউটপুট:

[2, 4, 6]

এই কোডটি মূলত একটা সাধারণ পদ্ধতিতে ডুপ্লিকেট উপাদানগুলো বাদ দিয়ে ইউনিক মানগুলোর একটি নতুন অ্যারে তৈরি করে।
*/

