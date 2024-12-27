"use strict";
function invokeFunctions(args, ...funcs) {
    return funcs.map(func => func(...args));
}
// Example usage
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const results = invokeFunctions([5, 3], add, multiply, subtract);
console.log(results); // Output: [8, 15, 2]
