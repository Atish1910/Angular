class Airthmatic 
{
    public No1 : number;
    public No2 : number;
    
    constructor(A :number , B :number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition() : number
    {
        var Ans : number;
        Ans = this.No1 + this.No2;
        return Ans;
    }
    
    Subtraction() : number
    {
        var Ans : number;
        Ans = this.No1 - this.No2;
        return Ans;
    }
}

var obj1 = new Airthmatic(11, 10);
var obj2 = new Airthmatic(200, 100);

var Result : number = 0;

Result = obj1.Addition();
console.log(Result);


Result = obj2.Subtraction();
console.log(Result);