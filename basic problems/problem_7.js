
// Q. Write a program that prints the multiplication table of a number.

// way-1

let num = 5;
let i = 1;
while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
};


//way-2


for(let a =2; a<=5; a++){ // এখানে দুই থেকে শুরু হয়ে ৫ পর্যন্ত সংখ্যা মাল্টিপ্লিকেশন হবে 
    for(let b =1; b<=15; b++){ // এখানে পেনেরো সংখ্যা পর্যন্ত গুণ হবে।
        // console.log(a + ' x ' + b + ' = ' + a * b);
    };
};