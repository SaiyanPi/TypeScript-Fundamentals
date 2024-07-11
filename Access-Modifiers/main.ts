// 3 access modifiers:
// 1) public : by default all members are public.
// 2) private : members are accessible only inside declared class.
// 3) protected : members are accessible in both declared class and derived class.

class Reptiles{
    animal1: string; //public by default
    private animal2: string; //accessible within the class
    protected animal3: string; //accessible within the class and derived class

    constructor(a:string, b:string, c:string){
        this.animal1 = a;
        this.animal2 = b;
        this.animal3 = c;
    }

    reptileList(){
        console.log('list of animals is '+ this.animal1 + ", "+ this.animal2+ ', and '+ this.animal3)
    }
}
let animal = new Reptiles('snake', 'corcodile', 'lizard');
animal.reptileList(); // public accessible

animal.animal1 = 'chameleon'; // public accessible
console.log(animal.animal1);

animal.animal2 = 'turtule'; // private not accessible outside the class

animal.animal3 = 'iguana'; //protected not accessible outside the class


class Creature extends Reptiles{
    creatureName(){
        console.log(this.animal3); // protected animal3 is accessible in the derived class
        console.log(this.animal2); //private animal2 is not accessible even in the derived class
    }  
}
