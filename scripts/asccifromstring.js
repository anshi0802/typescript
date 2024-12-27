"use strict";
function removeNonPrintableASCII(str) {
    return str.replace(/[\x00-\x1F\x7F]/g, '');
}
// Example usage
const inputString = "Hello, World! \x00\x01\x02"; // Example string with non-printable ASCII characters
const cleanedString = removeNonPrintableASCII(inputString);
console.log(cleanedString); // Output: "Hello, World! "
