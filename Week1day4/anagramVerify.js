
    function isAnagram(str1, str2) {
    // 1. Remove spaces and convert all letters to the same case
    const cleanStr1 = str1.trim().toLowerCase();
    const cleanStr2 = str2.trim().toLowerCase();
    console.log(cleanStr1,cleanStr2);
    
    // 2. Sort the Characters
    const sortedStr1 = cleanStr1.split('').sort().join(''); //sort() - Rearranges the items in the array into alphabetical order.
    const sortedStr2 = cleanStr2.split('').sort().join('');
    console.log(sortedStr1,sortedStr2);
    
    // 3. Compare Sorted Strings & 4. Return the Result
    return sortedStr1 === sortedStr2;
}

console.log(isAnagram('listen', 'silent'));
