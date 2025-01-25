var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calcCircumference = function () {
        return 2 * (this.width + this.height);
    };
    Rectangle.whoAmI = function () {
        console.log("I am a rectangle");
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        return _super.call(this, side, side) || this;
    }
    Square.prototype.calcCircumference = function () {
        return 4 * this.height;
    };
    Square.whoAmI = function () {
        console.log("I am a square");
    };
    return Square;
}(Rectangle));
// Test
var rectangle = new Rectangle(10, 5);
var square = new Square(5);
console.log("Rectangle Circumference: ", rectangle.calcCircumference());
console.log("Square : ", square.calcCircumference());
Rectangle.whoAmI();
Square.whoAmI();
