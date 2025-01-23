// Mixin with salary-related functions
const SalaryMixin = {
    showSalary() {
        console.log(`Current Salary: $${this._salary}`);
    },

    increaseSalary(amount) {
        if (amount > 0) {
            this._salary += amount;
            console.log(`Salary increased by $${amount}. New salary: $${this._salary}`);
        } else {
            console.error("Increase amount must be positive.");
        }
    },
};

// Employee class
class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary; // Employee salary
    }
    introduce() {
        return `Hello, I am ${this._name}, ${this._age} years old.`;
    }
}

// Adding Mixin functionality to Employee class
Object.assign(Employee.prototype, SalaryMixin);

const emp1 = new Employee("Ragheb", 30, 50000);

emp1.introduce();
emp1.showSalary();
emp1.increaseSalary(5000);
emp1.increaseSalary(-2000);


/**   What is an Interface?
        Defines a contract (method names, signatures) that classes must adhere to.
        Does not provide method implementations (only declarations) */ 

/**
 * interface -> No implementation of methods.
 * abstract -> Can provide some method implementations.
 * 
 * interface -> A class can implement multiple.
 * abstract -> A class can inherit from only one
 * 
 * interface -> Not natively supported (but simulated using objects, prototypes, or ES6 classes).
 * abstract -> Not directly supported (can simulate abstract behavior).
 */

/**
 * Are Interfaces Allowed in JavaScript?
    JavaScript does not have a direct interface keyword like TypeScript or Java. However, interfaces can be simulated using:
    Documentation/Convention: Define the expected methods for a class and enforce implementation manually.
    Abstract Classes: Use a base class with unimplemented methods (simulated in JavaScript by throwing an error).
 */