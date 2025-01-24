const CalculatorModule = (function () {
    // Private variables
    let result = 0;

    // Private method
    function logOperation(operation, value) {
        console.log(`Performed ${operation} with ${value}, result: ${result}`);
    }

    // Public API
    return {
        add: function (num) {
            result += num;
            logOperation("addition", num);
        },
        subtract: function (num) {
            result -= num;
            logOperation("subtraction", num);
        },
        getResult: function () {
            return result;
        },
        reset: function () {
            result = 0;
            console.log("Calculator reset.");
        }
    };
})();

// Using the Module
CalculatorModule.add(10);
CalculatorModule.subtract(3);
console.log(CalculatorModule.getResult()); // 7
CalculatorModule.reset();
