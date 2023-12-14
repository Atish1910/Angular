function FindsecondLargest(Arr : number[]) : number
{
    var firstMax : number = 0; 
    var secondMax : number = 0; 

    for (let i = 0; i < Arr.length; i++) 
    {
        if (Arr[i] > firstMax) 
        {
            secondMax = firstMax;
            firstMax = Arr[i];
        }
        else if ( Arr[i] > secondMax && Arr[i] !== firstMax) 
        {
            secondMax = Arr[i];
        }
    }
    return secondMax;    
}
var numbers : number[] = [100,120,140,160];

var secondLargest : number = FindsecondLargest(numbers);

console.log("2nd largest no from array is : "+secondLargest);