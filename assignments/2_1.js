function maxNumber(ArrValue) {
    var iMax = ArrValue[0];
    for (var i = 1; i <= ArrValue.length; i++) {
        if (ArrValue[i] > iMax) {
            iMax = ArrValue[i];
        }
        return iMax;
    }
}
var ArrGivenByUser = [10, 20, 30, 40];
var MaxArray = maxNumber(ArrGivenByUser);
console.log("Max No is " + MaxArray);
