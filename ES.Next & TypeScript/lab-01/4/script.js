// Define class Person
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    static whoAmI(){
        console.log('I am a person');
    }
}

// Define Mixin
const PersonMixin = {
    printName() {
        console.log(`Name: ${this.name}`);
    },
    printAge() {
        console.log(`Age: ${this.age}`);
    },
};

// Define class Student that extends Person
class Student extends Person{
    constructor(name, age,university, faculty, finalGrade){
        super(name, age);
        this.university = university;
        this.faculty = faculty;
        this.finalGrade = finalGrade;
    }

    show() {
        console.log(`${this.name} is a student in the faculty of ${this.faculty} at ${this.university}, and their final grade is ${this.finalGrade}.`);
    }

    static whoAmI() {
        console.log("I am a student");
    }
}

// Add Mixin methods to Student class
Object.assign(Student.prototype, PersonMixin);


//Test Person class
const person = new Person('Ragheb', 30);
person.show();
Person.whoAmI();

// Test Student class
const student = new Student("Ragheb", 20, "MIT", "Computer Science", 80);
student.show();
Student.whoAmI();

// Test Mixin
student.printName();
student.printAge();

