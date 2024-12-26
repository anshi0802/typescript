// Example using boolean type
let isDone: boolean = false;

// Example using void type
let unusable: void;
unusable = undefined;  // can also be null

// Function using any type
function ProcessData(x: any, y: any): any {
    return x + y;
}

// Using the ProcessData function
let result: any;

result = ProcessData("Hello ", "Any!"); // "Hello Any!"
console.log(result);

result = ProcessData(2, 3); // 5
console.log(result);
