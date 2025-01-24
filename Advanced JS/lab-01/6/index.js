const crs1 = {
    courseName: 'JS',
    courseMaxDegree: 100,
    printCourseInfo: function () {
        console.log(`Max. Degree of ${this.courseName} Course is ${this.courseMaxDegree}`);
    }
};

const crs2 = {
    courseName: 'HTML',
    courseMaxDegree: 90,
    printCourseInfo: function () {
        console.log(`Max. Degree of ${this.courseName} Course is ${this.courseMaxDegree}`);
    }
};

crs1.courseHours = 30;

// Test
crs1.printCourseInfo(); // Max. Degree of JS Course is 100
crs2.printCourseInfo(); // Max. Degree of HTML Course is 90

alert(`crs1 courseHours: ${crs1.courseHours}`); // Output: 30
alert(`crs2 courseHours: ${crs2.courseHours}`); // Output: undefined