const numbers = [1, 2, 3, 4, 5];

// create a new array with additional elements
const newNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log('Extended array:', newNumbers);

// combine two arrays
const numbers2 = [11, 12, 13, 14, 15];
const combinedNumbers = [...numbers, ...numbers2];
console.log('Combined array:', combinedNumbers);

// copy an array of the original array
const copyNumbers = [...numbers];
console.log('Copied array:', copyNumbers);

// function using Spread operator
const sum = (a, b, c) => a + b + c;
const sumNumbers = [...numbers]; // first three elements
console.log('Sum of numbers:', sum(...sumNumbers));