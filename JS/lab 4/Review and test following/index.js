// Without Strict Mode
function foo() {
    var x;
    x = 5;
    y = 6;  
    return x + y;
}
console.log(foo()); // Output: 11


// With Strict Mode
"use strict";  

function foo() {
    var x;
    x = 5;
    y = 6;   // ReferenceError: y is not defined
    return x + y;
}
console.log(foo());

// Without Strict Mode: Your code works, but y is implicitly created as a global variable, which can cause potential bugs in larger applications.
// With Strict Mode: An error is thrown because y is not explicitly declared, which is safer and helps avoid global scope pollution.