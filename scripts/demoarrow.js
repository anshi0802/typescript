"use strict";
// Traditional Function (ES5)
var getResultES5 = function (username, points) {
    return username + ' scored ' + points + ' points!';
};
// Arrow Function (ES6)
var getResultES6 = (username, points) => {
    return `${username} scored ${points} points!`;
};
// Arrow Function for Summation
let sumFunction = (a, b) => {
    return a + b;
};
console.log(sumFunction(20, 30)); // returns 50
// Arrow Function without Type Annotations
let sumSimpleFunction = (a, b) => {
    return a + b;
};
console.log(sumSimpleFunction(20, 30)); // returns 50
