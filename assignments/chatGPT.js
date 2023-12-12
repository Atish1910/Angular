function circleArea(rad) {
    var pi = 3.14;
    var Area = pi * rad * rad;
    return Area;
}
var RadGivenByUser = 22;
var calculateArea = circleArea(RadGivenByUser);
console.log("Area of circle is : " + calculateArea);
