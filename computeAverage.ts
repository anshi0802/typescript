function computeAverage<T>(arr: T[], mapFn: (value: T) => number): number {
    const mappedValues = arr.map(mapFn);
    const sum = mappedValues.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

// Example usage
const data = [1, 2, 3, 4, 5];  // Changed variable name from 'numbers' to 'data'
const average = computeAverage(data, num => num * 2);
console.log(average); // Output: 6
