function all<T>(arr: T[], predicate: (element: T) => boolean): boolean {
    for (let element of arr) {
        if (!predicate(element)) {
            return false;
        }
    }
    return true;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const isEven = (num: number) => num % 2 === 0;

console.log(all(numbers, isEven)); // Output: false

const allPositive = (num: number) => num > 0;
console.log(all(numbers, allPositive)); // Output: true
