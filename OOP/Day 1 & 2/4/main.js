function evaluateTemperature(temp, actualFeel) {
    console.log(
        temp >= 25 && temp <= 30 && actualFeel >= 25 && actualFeel <= 30
            ? "Normal"
            : temp < 25 && actualFeel < 25
                ? "Cold"
                : temp > 30 && actualFeel > 30
                    ? "Hot"
                    : "Conditions do not match any case."
    );
}
//test
evaluateTemperature(27, 28); 
evaluateTemperature(20, 22); 
evaluateTemperature(32, 33); 
evaluateTemperature(25, 35);

/**
 * The ternary operator can be used because:
    It's suitable for simple cases with a limited number of conditions.
 */

/**
 * A switch statement is not suitable for this example because:
    switch evaluates single expressions or discrete values (e.g., a specific number, string, or boolean).
    This scenario involves range-based logic (>=, <=), which switch does not directly support.
 */


// use if-else
function evaluateTemperature(temp, actualFeel) {
    if (temp >= 25 && temp <= 30 && actualFeel >= 25 && actualFeel <= 30) {
        console.log("Normal");
    } else if (temp < 25 && actualFeel < 25) {
        console.log("Cold");
    } else if (temp > 30 && actualFeel > 30) {
        console.log("Hot");
    } else {
        console.log("Conditions do not match any case.");
    }
}

