
// Q. Write a program that prints the multiplication table of a number.

// way-1

let num = 5;
let i = 1;
while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
};


//way-2


for(let a =2; a<=5; a++){
    for(let b =1; b<=10; b++){
        console.log(a + ' x ' + b + ' = ' + a * b);
    };
};