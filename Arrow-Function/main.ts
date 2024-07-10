// normal js function
let jsfun = function(parameter1){
    console.log(parameter1);
}

// arrow function(lamda expression in C#): no need to use function, instead use arrow notation
let tsfun1 = (parameter2, parameter3) => {
    console.log(parameter2);
    console.log(parameter3);
}

// if the function has only one line then we don't even need to write curly bracket 
let tsfun2 = (parameter4) => console.log(parameter4);

// if the function only has one parameter then we don't even need to write parentheses
let tsfun3 = parameter5 => console.log(parameter5);

// if our function doesn't have any parameter
let tsfun4 = () => console.log();