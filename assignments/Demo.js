function displayFactors(value) {
    var factors = [];
    for (var i = 1; i <= value; i++) {
        if (value % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
var NoGivenByUser = 20;
var finalAns = displayFactors(NoGivenByUser);
console.log("Factor of " + NoGivenByUser + finalAns);
