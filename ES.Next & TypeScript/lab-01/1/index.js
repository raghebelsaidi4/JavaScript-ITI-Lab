const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// forEach
console.log("Even numbers:");
numbers.forEach((number) => {
    if (number % 2 === 0) {
        console.log(number);
    }
});

// map
const squares = numbers.map((number) => number * 2);
console.log("Squares:", squares);

// Arrow function does not create its own this context
// Arrow functions inherit the 'this' value from their surrounding lexical scope, while normal functions create their own 'this' context.
// Example:
class Person{
    constructor(name){
        this.name = name;
    }

    // Normal function
    sayHelloNormal(){
        setTimeout(function (){
            console.log(`Hello Normal Function , my name is ${this.name}`);
        }, 1000);
    }

    // Arrow function
    sayHelloArrow(){
        setTimeout(() => {
            console.log(`Hello Arrow Function, my name is ${this.name}`);
        }, 1000);
    }
}

// Test
const person = new Person('Ragheb');
person.sayHelloNormal();
person.sayHelloArrow();