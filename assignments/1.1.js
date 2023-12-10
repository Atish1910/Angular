function FindLargestNo(numbers) {
    var Maxno = numbers[0];
    {
        for (var i = 1; i < numbers.length; i++) {
            if (numbers[i] > Maxno) {
                Maxno = numbers[i];
            }
        }
    }
    return Maxno;
}
var numbers = [1, 2, 3, 4];
var largestNumber = FindLargestNo(numbers);
console.log("highest no is " + largestNumber);
