"use strict";
function all(arr, predicate) {
    for (let element of arr) {
        if (!predicate(element)) {
            return false;
        }
    }
    return true;
}
// Example usage
const numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
console.log(all(numbers, isEven)); // Output: false
const allPositive = (num) => num > 0;
console.log(all(numbers, allPositive)); // Output: true
