var x = 5;
console.log(x);  // Output: 5
console.log(y);  // Output: undefined
var y = 7;

// x: The declaration and initialization are moved to the top, so x has a value of 5 when console.log(x) is called.
// y: The declaration (var y;) is hoisted to the top, but the initialization (y = 7;) happens later. As a result, y is undefined when console.log(y) is executed.