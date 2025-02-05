// 1. Create an array of objects holding student names and degrees
let students = [
    { Name: "Ahmed", Degree: 95 },
    { Name: "Sara", Degree: 85 },
    { Name: "Omar", Degree: 40 },
    { Name: "Laila", Degree: 50 },
    { Name: "Ali", Degree: 100 },
];

// 2. Find the student name who got a degree between 90 and 100
const topStudent = students.find(student => student.Degree >= 90 && student.Degree <= 100);
console.log("Student with Degree Between 90 and 100:", topStudent.Name);

// 3. Print students' names who got a degree less than 60
const below60Students = students.filter(student => student.Degree < 60).map(student => student.Name);
console.log("Students with Degree Below 60:", below60Students);

// 4. Add a new student to the array using push()
students.push({ Name: "Hana", Degree: 88 });
console.log("\nAfter Adding a New Student (for...in):");
for (const index in students) {
    console.log(students[index]);
}

// 5. Remove the last student using pop() and print all elements with for...of
students.pop();
console.log("\nAfter Removing the Last Student (for...of):");
for (const student of students) {
    console.log(student);
}

// 6. Sort the array alphabetically based on student name
students.sort((a, b) => a.Name.localeCompare(b.Name));
console.log("\nArray Sorted Alphabetically by Name:");
console.log(students);

// 7. Bonus: Use splice() to add 2 new students after the second element
students.splice(2, 0, 
    { Name: "Youssef", Degree: 78 },
    { Name: "Noor", Degree: 89 }
);
console.log("\nAfter Adding 2 New Students with Splice:");
console.log(students);

// 8. Bonus: Use splice() to remove 1 student after the third element
students.splice(3, 1);
console.log("\nAfter Removing 1 Student with Splice:");
console.log(students);
