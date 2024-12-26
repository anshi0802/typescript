// Traditional Function (ES5)
var getResultES5 = function (username: any, points: any): string {
    return username + ' scored ' + points + ' points!';
};

// Arrow Function (ES6)
var getResultES6 = (username: string, points: number): string => {
    return `${username} scored ${points} points!`;
};

// Arrow Function for Summation
let sumFunction = (a: number, b: number): number => {
    return a + b;
};
console.log(sumFunction(20, 30)); // returns 50

// Arrow Function without Type Annotations
let sumSimpleFunction = (a: any, b: any): number => {
    return a + b;
};
console.log(sumSimpleFunction(20, 30)); // returns 50
