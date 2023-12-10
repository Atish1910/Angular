function Demo() : string[] // return nothing
{
    var Languages : string[] = ["C","Cpp","java","python"]; 
    return Languages; // return array
}

var Arr : string[];
Arr = Demo(); // code start from 9

console.log("Elements of array are : ");
var i : number = 0;

for (let i = 0; i < Arr.length; i++) 
{
    console.log(Arr[i]);
}


//jya prakar cha return value ty prakar chi pishvi....