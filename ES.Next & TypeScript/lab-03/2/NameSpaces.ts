namespace MathOperation {
    export function add(a: number, b: number) {
        return a + b;
    }
    export function subtract(a: number, b: number) {
        return a - b;
    }
    export function multiply(a: number, b: number) {
        return a * b;
    }
    export function divide(a: number, b: number) {
        return a / b;
    }
}

// Test
console.log(MathOperation.add(10, 20));
console.log(MathOperation.subtract(10, 20));
console.log(MathOperation.multiply(10, 20));
console.log(MathOperation.divide(10, 20));