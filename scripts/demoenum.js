"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let colorValue;
colorValue = Color.Red;
console.log(colorValue); // Output: 0, since enums are zero-indexed by default
