
// Q. Write a function to capitalize the first letter of each word in a sentence?

function capitalizeWords(sentence){
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
console.log(capitalizeWords('i love my family'));


function capitalizeWord(sentence) {
    return sentence.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}
console.log(capitalizeWord('i am a govt. service holder'))


/*

function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


🧠 ধাপে ধাপে ব্যাখ্যা:
১. sentence.split(' ')

এই অংশটি পুরো বাক্যটিকে স্পেসের ভিত্তিতে শব্দগুলিতে ভাগ করে একটি অ্যারে বানায়।

উদাহরণ:

"hello world".split(' ') // ["hello", "world"]

২. .map(word => ...)

এই অংশে, প্রতিটি শব্দের ওপর একটি ফাংশন চালানো হয়। এই ফাংশনটি প্রতিটি শব্দের প্রথম অক্ষর বড় করে এবং বাকিগুলো ছোট করে।

word.charAt(0).toUpperCase()

🔸 শব্দের প্রথম অক্ষরকে বড় করে।

word.slice(1).toLowerCase()

🔸 প্রথম অক্ষরের পরের অংশটুকু ছোট করে।

একসাথে করলে:

word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

🔸 পুরো শব্দটিকে প্রপার ক্যাপিটালাইজ করে।
৩. .join(' ')

সবশেষে, সেই অ্যারেটিকে আবার একটি বাক্যে রূপান্তর করা হয়, যেখানে শব্দগুলির মাঝে স্পেস থাকে।
🎉 উদাহরণ:

capitalizeWords("javaScript is aWeSoMe")
// ফলাফল: "Javascript Is Awesome"

✅ সারসংক্ষেপে:

এই ফাংশনটি প্রতিটি শব্দের প্রথম অক্ষর বড় করে, এবং বাকি অক্ষরগুলো ছোট করে, যাতে বাক্যটি আরও সুন্দর ও ফর্মাল দেখায়।

প্রয়োজন হলে আমি এটি বাংলা কমেন্টসহও দিতে পারি। বলুন, তাহলে করে দিই! 😊
*/