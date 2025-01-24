// Factory function
function createCourse(name,hours){
    return {
        name: name,
        hours: hours,
        print: function (){
            console.log(`Course: ${this.name} - Hours: ${this.hours}`);
        }
    };
}

// Test
const course1 = createCourse('JavaScript', 40);
const course2 = createCourse('Python', 30);
course1.print();
course2.print();