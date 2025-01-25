const fruits = ["Apple", "Banana", "Cherry"];

// for..in
// Iterates over the keys (or indices in the case of arrays).
for (const index in fruits) {
    console.log(index, fruits[index]);
}

// for..of
// Iterates over the values of an iterable object (like an array, string, or Map).
for (const fruit of fruits) {
    console.log(`Value: ${fruit}`);
}

// forEach
// Calls a callback function for each element in the array.
// Provides both the value and the index (and the entire array as a third argument, if needed).
fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Value: ${fruit}`);
});