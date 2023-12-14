function findSecondLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array should have at least two elements");
    }
    var firstMax = 0;
    var secondMax = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] !== firstMax) {
            secondMax = arr[i];
        }
    }
    if (secondMax === 0) {
        throw new Error("No second largest element found");
    }
    return secondMax;
}
// Example usage
var numbers = [10, 5, 8, 20, 15];
try {
    var secondLargest = findSecondLargest(numbers);
    console.log("The second largest number is: " + secondLargest);
}
catch (error) {
    console.log(error.message);
}
