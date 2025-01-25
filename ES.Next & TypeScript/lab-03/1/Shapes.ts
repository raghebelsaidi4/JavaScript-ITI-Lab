class Rectangle{
    width: number;
    height: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    calcCircumference(): number {
        return 2 * (this.width + this.height);
    }

    static whoAmI(): void {
        console.log("I am a rectangle");
    }
}

class Square extends Rectangle{
    constructor(side: number){
        super(side, side);
    }

    calcCircumference(): number {
        return 4 * this.height;
    }

    static whoAmI(): void {
        console.log("I am a square");
    }

}

// Test
const rectangle = new Rectangle(10,5);
const square = new Square(5);

console.log("Rectangle Circumference: ", rectangle.calcCircumference());
console.log("Square : ", square.calcCircumference());

Rectangle.whoAmI();
Square.whoAmI();