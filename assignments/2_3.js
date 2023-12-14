function FindsecondLargest(Arr) {
    var firstMax = 0;
    var secondMax = 0;
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = Arr[i];
        }
        else if (Arr[i] > secondMax && Arr[i] !== firstMax) {
            secondMax = Arr[i];
        }
    }
    return secondMax;
}
var numbers = [100, 120, 140, 160];
var secondLargest = FindsecondLargest(numbers);
console.log("2nd largest no from array is : " + secondLargest);
