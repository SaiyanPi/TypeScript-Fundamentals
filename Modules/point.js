"use strict";
// export makes this file visible outside this file
// after writing export, now we can call this file a module
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('The point is (' + this.x + ',' + this.y + ')');
    };
    return Point;
}());
exports.Point = Point;
