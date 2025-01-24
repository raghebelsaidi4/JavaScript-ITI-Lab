# ouput
When you click the button, the `<span>` element (with the ID `spnCount`) updates to show how many times you’ve clicked the button. 
Initially, the span shows `0`. Each click increments the count, and the updated count is displayed.

# How the Code Works
`counter` is defined inside the IIFE and is private to it.
The returned inner function has access to `counter` because of the closure.
Each time the button is clicked, 
the inner function is invoked, modifying and displaying the updated value of `counter`.

# Why Use Closures?
**Data Encapsulation**: The counter variable is private and cannot be accessed or modified directly from outside the function.
**Persistent State**: The counter retains its value between function calls because of the closure.
**Avoid Polluting the Global Scope**: The variable counter is not defined in the global scope, preventing conflicts with other parts of the code.