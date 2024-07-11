// 3 access modifiers:
// 1) public : by default all members are public.
// 2) private : members are accessible only inside declared class.
// 3) protected : members are accessible in both declared class and derived class.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Reptiles = /** @class */ (function () {
    function Reptiles(a, b, c) {
        this.animal1 = a;
        this.animal2 = b;
        this.animal3 = c;
    }
    Reptiles.prototype.reptileList = function () {
        console.log('list of animals is ' + this.animal1 + ", " + this.animal2 + ', and ' + this.animal3);
    };
    return Reptiles;
}());
var animal = new Reptiles('snake', 'corcodile', 'lizard');
animal.reptileList(); // public accessible
animal.animal1 = 'chameleon'; // public accessible
console.log(animal.animal1);
animal.animal2 = 'turtule'; // private not accessible outside the class
animal.animal3 = 'iguana'; //protected not accessible outside the class
var Creature = /** @class */ (function (_super) {
    __extends(Creature, _super);
    function Creature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Creature.prototype.creatureName = function () {
        console.log(this.animal3); // protected animal3 is accessible in the derived class
        console.log(this.animal2); //private animal2 is not accessible even in the derived class
    };
    return Creature;
}(Reptiles));
