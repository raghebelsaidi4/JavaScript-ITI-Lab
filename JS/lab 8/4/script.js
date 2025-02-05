const students = [
    {
        id: 101,
        name: "John Doe",
        age: 22,
        address: {
            street: "123 Main St",
            city: "New York",
            zip: "10001"
        },
        skills: ["JavaScript", "Python", "Spring Boot"],
        isLeader: true
    },
    {
        id: 102,
        name: "Jane Smith",
        age: 24,
        address: null,
        skills: ["Java", "Hibernate", "React"],
        isLeader: false
    },
    {
        id: 103,
        name: "Alice Johnson",
        age: 21,
        address: {
            street: "456 Elm St",
            city: "Los Angeles",
            zip: "90001"
        },
        skills: ["C++", "Node.js", "SQL"],
        isLeader: true
    }
];

// Print each student name along with their skills
students.forEach(student => {
    console.log(`Name: ${student.name}`);
    console.log(`Skills: ${student.skills.join(", ")}`);
    console.log("-------------------");
});
