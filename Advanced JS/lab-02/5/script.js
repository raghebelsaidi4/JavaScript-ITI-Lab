class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calcCircumference(){
        return 2 * (this.width + this.height);
    }

    static WhoAmI(){
        console.log("I am a rectangle");
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }

    calcCircumference(){
        return this.width * this.height;
    }

    static WhoAmI(){
        console.log("I am a square");
    }
}

// Testing the Rectangle class
const myRectangle = new Rectangle(10, 5);
console.log("Rectangle Circumference:", myRectangle.calcCircumference()); // 30
Rectangle.WhoAmI(); // "I am rectangle"

// Testing the Square class
const mySquare = new Square(4);
console.log("Square Circumference:", mySquare.calcCircumference()); // 16
Square.WhoAmI(); // "I am square"

// Checking inheritance
console.log(mySquare instanceof Rectangle); // true
console.log(mySquare instanceof Square);    // true
