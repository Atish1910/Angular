function CheckEven(No) {
    if ((No % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var value = 11;
var Result;
Result = CheckEven(value);
if (Result == true) {
    console.log("It is even");
}
else {
    console.log("it is odd");
}
