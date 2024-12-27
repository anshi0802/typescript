"use strict";
function mapKeys(obj, fn) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = fn(key);
            result[newKey] = obj[key];
        }
    }
    return result;
}
// Example usage
const originalObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
const newObject = mapKeys(originalObject, key => key.toUpperCase());
console.log(newObject);
// Output: { FIRSTNAME: 'John', LASTNAME: 'Doe', AGE: 30 }
