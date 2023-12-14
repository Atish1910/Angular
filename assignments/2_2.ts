function Summation(Arr : number[]) : number
{
    var sum : number = 0;
    for (let i = 0; i < Arr.length; i++) 
    {
        sum += Arr[i];        
    }
    return sum;
}
var numbers : number[] = [100,120,140,160];

var largestNumber : number = Summation(numbers);

console.log("Summation of array is : "+largestNumber);