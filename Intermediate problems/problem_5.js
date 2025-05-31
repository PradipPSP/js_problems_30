
// Q. Write a program that checks if two strings are anagrams.

function anagram (a, b){
    let str1 = a.toLowerCase();
    let str2 = b.toLowerCase();

    if(str1.length != str2.length){
        console.log(`'${a}' and '${b}' are not an anagrams.`);
    } else if(str1.split("").sort().join() === str2.split("").sort().join()){
        console.log(`'${a}' and '${b}' are an anagrams.`);
    } else{
        console.log(`'${a}' and '${b}' are not an anagrams.`);
    };
};
anagram('pratim', 'pramit');
