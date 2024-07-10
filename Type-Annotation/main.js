// we cannot specify the type of the variable such as boolean, string, number in javascript.
// But in typescript, we can specify the type of the variable
var a;
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
var g;
var h = [1, "2", true];
var dynamic; //if the variable type is not set, by default it is 'any'
dynamic = "string";
dynamic = 2;
var height = 5;
var weight = 2;
// Radius=0, Length=1, Width=2 values are assigned automatically in increment ordere
var Measurement;
(function (Measurement) {
    Measurement[Measurement["Radius"] = 0] = "Radius";
    Measurement[Measurement["Length"] = 1] = "Length";
    Measurement[Measurement["Width"] = 2] = "Width";
})(Measurement || (Measurement = {}));
;
var Area = Measurement.Width; //Measurement.Width=2
var age = 5; // automatically declares variable age as a number
//age = "5"; // error because string is not assignable to a number type.
