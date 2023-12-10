function Demo() : number[] // return nothing
{
    var Marks : number[] = [10,20,30,40]; 
    return Marks; // return array
}

var Arr : number[];
Arr = Demo(); // code start from 9

console.log("Elements of array are : ");
var i : number = 0;

for (let i = 0; i < Arr.length; i++) 
{
    console.log(Arr[i]);
}


//jya prakar cha return value ty prakar chi pishvi....