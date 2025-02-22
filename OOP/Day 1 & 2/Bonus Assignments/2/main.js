function isPrime(num) {
    if (num <= 1) {
        return false;  // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;  
        }
    }
    return true;  
}

function printPrimeNumbersInRange(start, end) {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num); 
        }
    }
}

// Test
printPrimeNumbersInRange(10, 50);
