// normal js function
var jsfun = function (parameter1) {
    console.log(parameter1);
};
// arrow function(lamda expression in C#): no need to use function, instead use arrow notation
var tsfun1 = function (parameter2, parameter3) {
    console.log(parameter2);
    console.log(parameter3);
};
// if the function has only one line then we don't even need to write curly bracket 
var tsfun2 = function (parameter4) { return console.log(parameter4); };
// if the function only has one parameter then we don't even need to write parentheses
var tsfun3 = function (parameter5) { return console.log(parameter5); };
// if our function doesn't have any parameter
var tsfun4 = function () { return console.log(); };
