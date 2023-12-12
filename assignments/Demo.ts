function displayFactors(value : number) :number[]
{
    var factors :number[] = [];
    for (let i = 1; i <= value; i++) 
    {
        if (value % i === 0 ) 
        {
            factors.push(i);
        }
    }
    return factors;
}

var NoGivenByUser : number = 20;
var finalAns :number[] = displayFactors (NoGivenByUser);

console.log("Factor of "+NoGivenByUser +finalAns);