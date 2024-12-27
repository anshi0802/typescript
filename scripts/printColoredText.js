"use strict";
function printColoredText(text, color) {
    const colorCodes = {
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        reset: '\x1b[0m'
    };
    const colorCode = colorCodes[color] || colorCodes.reset;
    console.log(`${colorCode}${text}${colorCodes.reset}`);
}
// Example usage
printColoredText('Hello, World!', 'green'); // Output: Hello, World! (in blue)
