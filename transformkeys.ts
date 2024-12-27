function mapKeys<T>(obj: { [key: string]: T }, fn: (key: string) => string): { [key: string]: T } {
    const result: { [key: string]: T } = {};

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
