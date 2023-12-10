function circleArea(radius : number) : number
{
    const pi : number = 3.14;
    const Area : number = pi * radius * radius;
    return Area;
}
const userRadius : number = 5;
const calculateArea : number = circleArea (userRadius);

console.log("area of given raduis is " +calculateArea);