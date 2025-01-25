// typed Function
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Test
const result = addNumbers(1, 2);
console.log(`Sum of 1 and 2 is ${result}`); // Sum of 1 and 2 is 3

function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}`;
}

// Test
console.log(greet("Ahmed")); // Hello, Ahmed
console.log(greet("Ahmed", "Hi")); // Hi, Ahmed