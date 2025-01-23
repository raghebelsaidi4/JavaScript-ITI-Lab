// Example 1: var Hoisting
console.log(a); // undefined (declaration is hoisted, but value is not)
var a = 10;
console.log(a); // 10

// Example 2: let Hoisting
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // This line won't execute


// Example 3: const Hoisting
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // This line won't execute
