// literal function
setInterval(function (){
    console.log("Current Time is: " + new Date().toLocaleDateString());
}, 1000);

//  Why Use a Literal Function in This Case?
// 1. There's no need to reuse it elsewhere
// 2. avoids adding unnecessary identifiers,
// 3.  You don’t need to scroll up/down or jump to another part of the file to see what the function does.
