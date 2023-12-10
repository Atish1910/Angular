function circleArea(radius) {
    var pi = 3.14;
    var Area = pi * radius * radius;
    return Area;
}
var userRadius = 5;
var calculateArea = circleArea(userRadius);
console.log("area of given raduis is " + calculateArea);
