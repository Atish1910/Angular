{
    var factors = [];
    for (var i = 1; i <= value; i++) {
        if (value % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
var NoGivenByUser = 5000;
var finalAns = DisplayFactors(NoGivenByUser);
console.log("Factors of above no is :" + finalAns);
