// interfaces contain only declaration but no implementation.



// without interface:
let pinMap1 = (location: {latitude: number, longitude: number}) => {
    // {latitude: number, longitude: number} is inline annotation
}
pinMap1({
    latitude: 123,
    longitude: 125
});


// with interface
interface Rectangle {
    height: number,
    width: number
}

let rectangle1 = (rect: Rectangle) => {
    //
}
rectangle1({
    height: 3,
    width: 5
})
//OR
let rectangle2: Rectangle = {
    height: 2,
    width: 6
};

// extending interface
interface ColoredRectangle extends Rectangle{
    color: string
}
let rectangle3: ColoredRectangle = {
    height: 4,
    width: 6,
    color: 'yellow'
};