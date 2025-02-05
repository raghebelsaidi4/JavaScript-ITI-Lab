// Array of 10 JavaScript tips
const jsTips = [
    "JavaScript is single-threaded, meaning it can only handle one task at a time.",
    "Always declare variables with 'let' or 'const' instead of 'var' to avoid scope issues.",
    "Arrow functions are a shorthand syntax for writing functions and do not have their own 'this'.",
    "Use '===‘ instead of '==' for strict equality checks to avoid unexpected type conversions.",
    "JavaScript objects can have dynamic properties, making them very flexible.",
    "The 'document.querySelector' method lets you select elements using CSS selectors.",
    "Async/await makes it easier to write asynchronous code that looks synchronous.",
    "JavaScript arrays have powerful methods like 'map', 'filter', and 'reduce' for data manipulation.",
    "Closures allow functions to access variables from their parent scope even after the parent has returned.",
    "Use 'console.log()' for debugging, but remember to remove it in production code."
];

// Function to show a random tip
function showRandomTip() {
    const randomIndex = Math.floor(Math.random() * jsTips.length);
    const tipTextElement = document.getElementById("tipText");
    tipTextElement.textContent = jsTips[randomIndex];
}

// Display a random tip on page load
showRandomTip();
