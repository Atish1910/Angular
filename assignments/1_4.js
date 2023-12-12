function checkPrime(value) {
    if (value <= 1) {
        return false;
    }
    // Check for factors other than 1 and the number itself
    for (var i = 2; i <= (value / 2); i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}
// Example usage
var inputValue = 37; // You can change this value to test different inputs
var isPrime = checkPrime(inputValue);
console.log("Is ".concat(inputValue, " a prime number? ").concat(isPrime));
