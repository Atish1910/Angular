function Fibonacci(Limit) {
    var iNo1 = 0;
    var iNo2 = 1;
    console.log("Fobinacci series till" + Limit);
    for (var i = 0; iNo1 <= Limit; i++) {
        console.log(iNo1);
        var nextTerm = iNo1 + iNo2;
        iNo1 = iNo2;
        iNo2 = nextTerm;
    }
}
var userLimit = 1000;
Fibonacci(userLimit);
