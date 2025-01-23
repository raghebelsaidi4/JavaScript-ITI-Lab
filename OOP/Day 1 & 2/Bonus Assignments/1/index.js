function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSeries(numTerms) {
    for (let i = 0; i < numTerms; i++) {
        console.log(fibonacci(i));
    }
}

// Test
printFibonacciSeries(10);  
