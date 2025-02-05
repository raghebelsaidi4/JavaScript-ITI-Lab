console.log(x); // Output: undefined (Hoisting with var)
var x = 5;

try {
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;
} catch (error) {
    console.error(error);
}

try {
    console.log(z); // ReferenceError: Cannot access 'z' before initialization
    const z = 15;
} catch (error) {
    console.error(error);
}

// Example with function hoisting
hoistedFunction(); // Output: "Function is hoisted!"

function hoistedFunction() {
    console.log("Function is hoisted!");
}

// Example showing hoisting behavior with var inside a function
function hoistingExample() {
    console.log(a); // Output: undefined
    var a = 20;
    console.log(a); // Output: 20
}

hoistingExample();

// Using let and const inside a block
{
    try {
        console.log(blockVar); // ReferenceError
        let blockVar = "I am inside a block";
    } catch (error) {
        console.error(error);
    }

    try {
        console.log(blockConst); // ReferenceError
        const blockConst = "I am also inside a block";
    } catch (error) {
        console.error(error);
    }
}
