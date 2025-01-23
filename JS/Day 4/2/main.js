function sum(a, b) {
    return a + b;
}

// Function that prompts the user for two numbers, calls the sum function, and logs the result
function getNumbersAndCalculateSum() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.error("Invalid input. Please enter valid numbers.");
        return;
    }

    const result = sum(num1, num2);
    console.log(`The sum of ${num1} and ${num2} is: ${result}`);
}
