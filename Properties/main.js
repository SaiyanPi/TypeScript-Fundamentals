// properties looks like a field from ouitside but internally it is more like a method or a class
// it's either one method(either getter/readonly or setter/read-write) or a combination of both getter and setter
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.coordinate = function () {
        console.log('X: ' + this._x + ', ' + 'Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // get x(){
        //     return this._x;
        // }
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(2, 7);
point.coordinate(); // X: 2, Y: 7
point.x = 10; // setting a new value of private property x
point.coordinate(); // X: 10, Y: 7
