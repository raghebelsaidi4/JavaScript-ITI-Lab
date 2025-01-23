function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// test
const numbers = [5, 15, 25];
console.log(sumArray(numbers)); 
