// there is a lot of unnecessary loc in the previous accessmodefire and constructor topic.
// here we will refine the code.

// Without Refining
class Elements{
    fire: string;                       //no need
    protected earth: string;            //no need
    private air: string;                //no need
    constructor(el1: string, el2: string, el3: string){
        this.fire = el1;                //no need
        this.earth = el2;               //no need
        this.air = el3;                 //no need
    }
    print(){
        console.log(this.fire+','+ this.earth +','+this.air);
    }
}
let elements = new Elements('fire', 'land', 'wind');
elements.print();


// After Refine
class Country{
    constructor(public cou1: string, protected cou2: string, private cou3: string){
    }
    show(){
        console.log(this.cou1+','+ this.cou2 +','+this.cou3);
    }
}
let nation = new Country('nepal', 'colombia', 'brazil');
nation.show();