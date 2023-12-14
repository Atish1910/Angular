function maxNumber(Arr : number[]) : number
{
    let iMaxCounter : number = 0;

    for (let i = 0; i < Arr.length; i++) 
    {
        if (Arr[i] > iMaxCounter) 
        {
            iMaxCounter = Arr[i];    
        }
        
    }return iMaxCounter;

}

var ArrGivenByUser : number[] = [10,20,30,40];
var largestNumber : number = maxNumber(ArrGivenByUser);

console.log("Maximum No from arra is" +largestNumber);