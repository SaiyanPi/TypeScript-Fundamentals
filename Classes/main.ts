// cohesion: things that are related should be a part of one unit and they should go together
// class: groups of properties(variables) and methods(functions) that are highly related.

class Point {
    latitude: number;
    longitude: number;

    pinMap1() {
        console.log('latitude: ' + this.latitude + ', longitude: ' + this.longitude);
    }
    pinMap2(loc: Point) {
        
    }
}


// object syntax: let object_name = new class_name();

let Object1 = new Point();
//Object1.latitude = 12;
//Object1.longitude = 14;
Object1.pinMap1();
