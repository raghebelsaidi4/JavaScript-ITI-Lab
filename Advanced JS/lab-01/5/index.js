function Person(name, age) {
  this.name = name;
  this.age = age;
}

// PrintPerson method to the prototype of Person
Person.prototype.printPerson = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Student inherits from Person
function Student(name,age,faculty, totalMark=0){
    Person.call(this, name, age);
    this.faculty = faculty;
    this.totalMark = totalMark;

    // private variable and method
    const min_degree = 60;
    function checkSuccess(){
        return this.totalMark > min_degree? 'Success' : 'Fail';
    }

    // public method
    this.checkResult = function (){
        alert(`Student Result: ${checkSuccess.call(this)}`);
    };

    // inheritance
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    // add PrintStudent method to the prototype of Student
    Student.prototype.printStudent = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Faculty: ${this.faculty}, Total Mark: ${this.totalMark}`);
    };
}

// Test
const student = new Student('Ahmed', 20, 'Computer Science', 80);
student.printPerson();
student.printStudent();
student.checkResult();

student.totalMark = 50;
student.checkResult();

console.log(student.min_degree); // undefined
console.log(student.checkSuccess()); // undefined

// Why Use Prototype for Methods Like PrintPerson?
//     Using prototype ensures that the method is shared across all instances of Person and Student.
//     If defined directly in the constructor, each object would have its own copy of the method, which is memory-inefficient.