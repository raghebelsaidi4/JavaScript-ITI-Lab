const grades = [60, 100, 10, 15, 85];

// Sort the array numerically in descending order
const sortedGrades = grades.slice().sort((a, b) => b - a);
console.log("Sorted Grades (Descending):", sortedGrades);

// Find the highest student degree (first degree <= 100)
const highestGrade = sortedGrades.find((grade) => grade <= 100);
console.log("Highest Grade (<= 100):", highestGrade);

// Filter and print grades below 60
const gradesBelow60 = grades.filter((grade) => grade < 60);
console.log("Grades Below 60:", gradesBelow60);
