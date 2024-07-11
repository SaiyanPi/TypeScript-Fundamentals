// same concepts with C# since they both are OOP
var Point = /** @class */ (function () {
    function Point(num1, num2) {
        this.x = num1;
        this.y = num2;
    }
    Point.prototype.coordinate = function () {
        console.log('coordinate point is x: ' + this.x + ', and y: ' + this.y);
    };
    return Point;
}());
var loc = new Point(3, 5);
loc.coordinate();
