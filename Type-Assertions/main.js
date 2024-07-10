var message = 'hello'; // string type
message.endsWith('o'); // intellisense picks up function(endsWith) that goes with object of type string.
var greet; // any type
greet = 'bonjour';
var endWithR = greet.endsWith('r'); // intellisense doesn't picks up function for object of type any
// in above case where the intellisense doesn't pick up the function for an object of type 'any' 
// we need to explicitly tell typescript compiler that this greet variable is actually a string
// and this is called a type-assertion. there are 2 ways of type-assertions.
var color;
color = 'red';
// 1.
var endsWithD = color.endsWith('d');
// 2.
var alternativeWay = color.endsWith('d');
// simply, type assertion is the way to tell the compiler the type of variable.
