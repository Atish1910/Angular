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

var NoGivenByUser : number = 500;
var finalAns :number[] = displayFactors (NoGivenByUser);

console.log("Factor of " +finalAns);