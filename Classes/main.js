// cohesion: things that are related should be a part of one unit and they should go together
// class: groups of properties(variables) and methods(functions) that are highly related.
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.pinMap1 = function () {
        console.log('latitude: ' + this.latitude + ', longitude: ' + this.longitude);
    };
    Point.prototype.pinMap2 = function (loc) {
    };
    return Point;
}());
// object syntax: let object_name = new class_name();
var Object1 = new Point();
Object1.latitude = 12;
Object1.longitude = 14;
Object1.pinMap1();
