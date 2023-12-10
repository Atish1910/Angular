function findLargestNumber(numbers: number[]): number {
    let maxNumber: number = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }

    return maxNumber;
}

let numbers: number[] = [10, 5, 8, 20, 15];
let largestNumber: number = findLargestNumber(numbers);

console.log("The largest number is: " + largestNumber);
