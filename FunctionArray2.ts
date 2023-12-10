// function defination body
function Addition(Arr : number[]) :number // bhajiwalyachi pishviii
{
    console.log("elements of array are");
    
    var sum : number = 0;
    var i : number = 0;
    for(i = 0; i<Arr.length; i++)
    {
        sum = sum + Arr[i];
    }
    return sum;


}

var Marks : number[] = [10,20,30,40,50];


// function  call

var Result : number = 0;
Result = Addition(Marks); 
console.log("Addition is :"  +Result);
