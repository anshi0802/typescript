function invokeFunctions<T, R>(args: T[], ...funcs: ((...args: T[]) => R)[]): R[] {
    return funcs.map(func => func(...args));
}

// Example usage
const add = (a: number, b: number) => a + b;
const multiply = (a: number, b: number) => a * b;
const subtract = (a: number, b: number) => a - b;

const results = invokeFunctions([5, 3], add, multiply, subtract);
console.log(results); // Output: [8, 15, 2]
