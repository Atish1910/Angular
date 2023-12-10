function Percentage(Marks : number, Outof : number = 100) : number
{
    var Result :  number = 0;
    Result = ((Marks / Outof) * 100)
    return Result;
}

var Ans : number = 0;

Ans  = Percentage(67, 200);
console.log("Percentage is "+Ans);


Ans  = Percentage(67);
console.log("Percentage is "+Ans);
