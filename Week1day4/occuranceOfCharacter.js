function countCharWithSplit(str, charToFind) {
    // Splitting by the character breaks the string into pieces
    return str.split(charToFind).length - 1;
}

// Example usage:
console.log(countCharWithSplit("javascript", "a"));
