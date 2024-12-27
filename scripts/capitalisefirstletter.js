"use strict";
function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// Example usage
const exampleString = "hello, world!";
const capitalizedString = capitalizeFirstLetter(exampleString);
console.log(capitalizedString); // Output: "Hello, world!"
