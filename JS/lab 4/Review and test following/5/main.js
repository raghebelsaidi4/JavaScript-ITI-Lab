function test(){
    for (let i = 0; i < 10; i++) {
        alert(i);        // First alert
        alert(x);        // Second alert
        let x = 10;      // x is declared here
    }
    console.log(i);      // Logs i after the loop
}

// The code will throw two errors:
// A ReferenceError for x in the alert(x) due to accessing x before initialization (because of temporal dead zone with let).
// A ReferenceError for i in console.log(i) because i is block-scoped with let and is not accessible outside the loop.

// var -> hoisted to the top of scope and initialized with "undefined"
// let -> hoisted but they are not initialized until the declaration is encountered

// var: Function-scoped or globally-scoped (if declared outside any function).
// let: Block-scoped, meaning it is confined to the block (e.g., inside loops, conditionals) where it is defined.