// interfaces contain only declaration but no implementation.
// without interface:
var pinMap1 = function (location) {
    // {latitude: number, longitude: number} is inline annotation
};
pinMap1({
    latitude: 123,
    longitude: 125
});
var rectangle1 = function (rect) {
    //
};
rectangle1({
    height: 3,
    width: 5
});
//OR
var rectangle2 = {
    height: 2,
    width: 6
};
var rectangle3 = {
    height: 4,
    width: 6,
    color: 'yellow'
};
