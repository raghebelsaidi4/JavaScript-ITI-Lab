// Course class
class Course {
    constructor(courseName, courseCode, credits) {
      this._courseName = courseName; // Private variable (using _ convention)
      this._courseCode = courseCode;
      this._credits = credits;
    }
  
    // Getters and setters for course details
    get courseName() {
      return this._courseName;
    }
  
    set courseName(newName) {
      this._courseName = newName;
    }
  
    get courseCode() {
      return this._courseCode;
    }
  
    set courseCode(newCode) {
      this._courseCode = newCode;
    }
  
    get credits() {
      return this._credits;
    }
  
    set credits(newCredits) {
      this._credits = newCredits;
    }
  
    // Method to get course info
    getCourseInfo() {
      return `${this._courseName} (Code: ${this._courseCode}, Credits: ${this._credits})`;
    }
  }
  
  // Student class
  class Student {
    constructor(name, age) {
      this._name = name; // Private variable (using _ convention)
      this._age = age;
      this._courses = []; // Array to store Course objects
    }
  
    // Getters and setters for student details
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  
    get age() {
      return this._age;
    }
  
    set age(newAge) {
      this._age = newAge;
    }
  
    // Method to add a course to the student's course list
    addCourse(course) {
      if (course instanceof Course) {
        this._courses.push(course);
      } else {
        console.error("Only Course objects can be added.");
      }
    }
  
    // Method to remove a course by courseCode
    removeCourse(courseCode) {
      this._courses = this._courses.filter(course => course.courseCode !== courseCode);
    }
  
    // Method to list all courses
    listCourses() {
      if (this._courses.length === 0) {
        return "No courses enrolled.";
      }
      return this._courses.map(course => course.getCourseInfo()).join("\n");
    }
  
    // Method to introduce the student
    introduce() {
      return `Hello, my name is ${this._name} and I am ${this._age} years old.\nI am enrolled in the following courses:\n${this.listCourses()}`;
    }
  }
  
// Create some courses
const course1 = new Course("Mathematics", "MATH101", 3);
const course2 = new Course("Computer Science", "CS102", 4);
const course3 = new Course("Physics", "PHYS103", 3);

// Create a student and add courses
const student1 = new Student("Alice", 20);
student1.addCourse(course1);
student1.addCourse(course2);

console.log(student1.introduce());

// Add another course
student1.addCourse(course3);

// List all courses
console.log(student1.listCourses());

// Remove a course
student1.removeCourse("CS102");
console.log(student1.listCourses());

