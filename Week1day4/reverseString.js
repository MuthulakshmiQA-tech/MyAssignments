/* let name = "Testleaf";
let reverseString = '';
for (let i = name.length - 1; i >= 0; i--) {
    reverseString += name[i];
}
console.log(reverseString); */

let str = "TestLeaf";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);