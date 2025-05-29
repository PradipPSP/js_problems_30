
// Q. Write a function that flattens a nested array

const nestedArray = [15, [20, 30], 20, [10, 5], 45];
const flattenedArray = nestedArray.flat(2); 
console.log(flattenedArray);

// ব্যাখ্যাঃ

// যেহেতু মূল এ্যারের মধ্যে ২ টি নেস্টেড অ্যারে আছে এজন্য flat(2) ব্যবহার করা হয়েছে। যদি ৩ টি নেস্টেড অ্যারে থাকে তাহলে flat(3) ব্যবহার করতে হবে।