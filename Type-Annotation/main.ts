// we cannot specify the type of the variable such as boolean, string, number in javascript.
// But in typescript, we can specify the type of the variable

let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[];
let f: number[] = [1, 2, 3];
let g: any[];
let h: any[] = [1, "2", true];
let dynamic; //if the variable type is not set, by default it is 'any'
dynamic = "string";
dynamic = 2;

const height = 5;
const weight = 2;

// Radius=0, Length=1, Width=2 values are assigned automatically in increment ordere
enum Measurement {Radius, Length, Width}; 

let Area = Measurement.Width; //Measurement.Width=2

let age = 5; // automatically declares variable age as a number
//age = "5"; // error because string is not assignable to a number type.