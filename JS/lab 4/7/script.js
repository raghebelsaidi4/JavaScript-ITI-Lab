document.getElementById('evaluateExpressionBtn').addEventListener('click', () => {

    const expression = prompt("Please enter a math expression (e.g., 3+4*5/10*8):");

    if (expression) {
        try {
            const result = evaluateExpression(expression);
            alert(`You entered: ${expression}, and the result is: ${result}`);
        } catch (error) {
            alert("Invalid math expression. Please try again.");
        }
    } else {
        alert("No input provided!");
    }
});

function evaluateExpression(expression) {
    return eval(expression);
}
