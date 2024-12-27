"use strict";
function createObjectFromPairs(pairs) {
    const obj = {};
    pairs.forEach(([key, value]) => {
        obj[key] = value;
    });
    return obj;
}
// Example usage
const keyValuePairs = [
    ["name", "Alice"],
    ["age", 30],
    ["isStudent", true]
];
const createdObject = createObjectFromPairs(keyValuePairs);
console.log(createdObject); // Output: { name: 'Alice', age: 30, isStudent: true }
