
// Q. Write a function that finds the intersection of two arrays.

// অর্থ ২ টি এ্যারের মধ্যে কমন ইলিমেন্ট কি কি আছে অর্থাৎ ২ টি এ্যারের মধ্যে কমন ইলিমেন্ট খুজে বের করা হচ্ছে ইন্টাসেকশন।

function intersection (arr1, arr2){
    let newArr = [];
        for (let i = 0; i < arr1.length; i++){
            for (let j = 0; j < arr2.length; j++){
                if(arr1[i] == arr2[j]){
                    newArr.push(arr1[i]);
                }
            }
        }
    return newArr;
};
let interSec = intersection([2, 4, 6, 8, 1], [1, 3, 4, 5, 8, 9]);
console.log(interSec); // [ 4, 8, 1 ]