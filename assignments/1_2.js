function MaxNumber(ArryOfNumbers) {
    var iMax = 0;
    for (var i = 0; i < ArryOfNumbers.length; i++) {
        if (ArryOfNumbers[i] > iMax) {
            iMax = ArryOfNumbers[i];
        }
    }
    return iMax;
}
var ArrGivenByUser = [10, 33, 52, 102];
var MaxNo = MaxNumber(ArrGivenByUser);
console.log("The hoghest no from array is " + MaxNo);
