function CheckEven(No : number) : boolean
{
    if ((No % 2)== 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var value : number = 11;
var Result : boolean;

Result = CheckEven(value);
if (Result == true)

{
    console.log("It is even");
}
else
{
    console.log("it is odd");
} 