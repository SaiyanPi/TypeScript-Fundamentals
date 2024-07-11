// same concepts with C# since they both are OOP

class Point {
    x: number;
    y: number;
    constructor(num1: number, num2: number) {
        this.x = num1;
        this.y = num2;
    }
    coordinate(){
        console.log('coordinate point is x: ' + this.x + ', and y: '+ this.y);
    }
}
let loc = new Point(3,5);
loc.coordinate();

