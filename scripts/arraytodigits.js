"use strict";
function numberToDigits(num) {
    return num.toString().split('').map(Number);
}
// Example usage
const number = 12345;
const digits = numberToDigits(number);
console.log(digits); // Output: [1, 2, 3, 4, 5]
