let s = " fly me to the moon ";
console.log(s.length);
let words = s.trim().split(' '); //trims the extra white spaces and split the words by spaces
console.log(words);
const lastWord = words[words.length - 1]; 
console.log(lastWord.length);