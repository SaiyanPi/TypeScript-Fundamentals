// properties looks like a field from ouitside but internally it is more like a method or a class
// it's either one method(either getter/readonly or setter/read-write) or a combination of both getter and setter

class Point{
    constructor(private _x: number, private _y: number){
    }
    coordinate(){
        console.log('X: ' + this._x + ', ' + 'Y: '+ this._y);
    }
    get x(){
        return this._x;
    }
    set x(value: number){
        if(value < 0){
            throw new Error('value cannot be less than 0.');
        }
        this._x = value;
    }
}
let point = new Point(2,7);
point.coordinate(); // X: 2, Y: 7
point.x = 10; // setting a new value of private property x
point.coordinate(); // X: 10, Y: 7
