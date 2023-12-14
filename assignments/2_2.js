function Summation(Arr) {
    var sum = 0;
    for (var i = 0; i < Arr.length; i++) {
        sum += Arr[i];
    }
    return sum;
}
var numbers = [100, 120, 140, 160];
var largestNumber = Summation(numbers);
console.log("Summation of array is : " + largestNumber);
