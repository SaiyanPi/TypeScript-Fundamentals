// there is a lot of unnecessary loc in the previous accessmodefire and constructor topic.
// here we will refine the code.
// Without Refining
var Elements = /** @class */ (function () {
    function Elements(el1, el2, el3) {
        this.fire = el1;
        this.earth = el2;
        this.air = el3;
    }
    Elements.prototype.print = function () {
        console.log(this.fire + ',' + this.earth + ',' + this.air);
    };
    return Elements;
}());
var elements = new Elements('fire', 'land', 'wind');
elements.print();
// After Refine
var Country = /** @class */ (function () {
    function Country(cou1, cou2, cou3) {
        this.cou1 = cou1;
        this.cou2 = cou2;
        this.cou3 = cou3;
    }
    Country.prototype.show = function () {
        console.log(this.cou1 + ',' + this.cou2 + ',' + this.cou3);
    };
    return Country;
}());
var nation = new Country('nepal', 'colombia', 'brazil');
nation.show();
