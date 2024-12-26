"use strict";
let empName = "Rohan";
let empDept = "IT";
// Before-ES6
let output1 = empName + " works in the " + empDept + " department.";
// After-ES6
let output2 = `${empName} works in the ${empDept} department.`;
console.log(output1); // Rohan works in the IT department.
console.log(output2); // Rohan works in the IT department.
