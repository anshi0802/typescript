"use strict";
// Example using boolean type
let isDone = false;
// Example using void type
let unusable;
unusable = undefined; // can also be null
// Function using any type
function ProcessData(x, y) {
    return x + y;
}
// Using the ProcessData function
let result;
result = ProcessData("Hello ", "Any!"); // "Hello Any!"
console.log(result);
result = ProcessData(2, 3); // 5
console.log(result);
