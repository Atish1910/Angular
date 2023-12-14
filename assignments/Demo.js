function maxNumber(Arr) {
    var iMaxCounter = 0;
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] > iMaxCounter) {
            iMaxCounter = Arr[i];
        }
    }
    return iMaxCounter;
}
var ArrGivenByUser = [10, 20, 30, 40];
var largestNumber = maxNumber(ArrGivenByUser);
console.log("Maximum No from arra is" + largestNumber);
