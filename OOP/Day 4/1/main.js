class Person {
    constructor(name, age) {
        // abstract class
        if (new.target === Person) {
            throw new Error(' Person is an abstract class and cannot be instantiated');
        }
        this._name = name;
        this._age = age;
    }
    // use private members , getter and setters
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }

    /**
     * Why Getters and setters are better than public accessible variables?
     * Getters and setters provide controlled access to private variables, ensuring encapsulation and validation. Public variables lack such control and may lead to unintended modifications.
     */
    show() {
        console.log(`Person Details : name : ${this.name} and age : ${this.age}`);
    };
};

class Employee extends Person {
    static count = 0;
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
        Employee.count++;
    }
    // Getter for the static employee count
    static get employeeCount() {
        return Employee.count;
    }
    //overriding
    show() {
        console.log(`Employee Details : name : ${this.name} and age : ${this.age} and job title : ${this.jobTitle}`);
    }
    static displayHTRRules() {
        console.log("Company HR Rules:\n1. Respect others.\n2. Follow company policies.\n3. Be punctual.");
    }

};
/**
 *   static method 
 *   Belongs to the class and can be called without creating an instance (e.g., Employee.displayHRRules()).
 *  
 *  member method
 *  Member Method: Belongs to an instance and requires an object to be called (e.g., employee.introduce()).
 */

class Student extends Person {
    constructor(name, age, courseName) {
        // sealed class
        if (new.target !== Student) {
            throw new Error('Student is a sealed class and can’t be inherited');
        }
        super(name, age);
        this.courseName = courseName;
    }
    //overriding
    show() {
        console.log(`Student Details :
             name : ${this.name} 
            age : ${this.age}
            course name : ${this.courseName}`);
    }
}

//  js does not support traditional overloading.it can be simulated with default params(width=length)
//  Ex -> function calculateArea(length, width = length) {
//   return length * width; // If width is not provided, it defaults to length (square)
// }

