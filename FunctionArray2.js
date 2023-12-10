// function defination body
function Addition(Arr) {
    console.log("elements of array are");
    var sum = 0;
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        sum = sum + Arr[i];
    }
    return sum;
}
var Marks = [10, 20, 30, 40, 50];
// function  call
var Result = 0;
Result = Addition(Marks);
console.log("Addition is :" + Result);
