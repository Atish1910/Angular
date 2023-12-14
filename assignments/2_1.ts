function MaxNumber(ArryOfNumbers : number[]) : number
{

    var iMax : number = 0;
    for (let i = 0; i < ArryOfNumbers.length; i++) 
    {
        if (ArryOfNumbers[i] > iMax) 
        {
            iMax = ArryOfNumbers[i];    
        }
    }
    return iMax;
}

var ArrGivenByUser : number[] = [10,33,52,102];

var MaxNo : number = MaxNumber(ArrGivenByUser);

console.log("The hoghest no from array is "+MaxNo);