// export makes this file visible outside this file
// after writing export, now we can call this file a module

export class Point{
    constructor(public x: number, public y: number){       
    }
    draw(){
        console.log('The point is ('+ this.x +',' + this.y +').');
    }
}