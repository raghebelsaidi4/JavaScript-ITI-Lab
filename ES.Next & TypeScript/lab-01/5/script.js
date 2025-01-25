const names = new Set();

names.add('Alice');
names.add('Bob');
names.add('Charlie');
names.add('Alice');

console.log("Student names: ", names); // Student names:  Set { 'Alice', 'Bob', 'Charlie' }

console.log("Set values using for...of");
for (const name of names) {
    console.log(name);
}