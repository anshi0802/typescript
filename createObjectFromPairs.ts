function createObjectFromPairs(pairs: [string, any][]): { [key: string]: any } {
    const obj: { [key: string]: any } = {};

    pairs.forEach(([key, value]) => {
        obj[key] = value;
    });

    return obj;
}

// Example usage
const keyValuePairs: [string, any][] = [
    ["name", "Alice"],
    ["age", 30],
    ["isStudent", true]
];

const createdObject = createObjectFromPairs(keyValuePairs);
console.log(createdObject); // Output: { name: 'Alice', age: 30, isStudent: true }
