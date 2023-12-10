class Demo
{
    //charctoricts
    No1 : number;
    No2 : number;

    // Default constructor
    constructor(A : number, B : number,)
    {
        console.log("Inside of constructor class");
        this.No1 = A;
        this.No2 = B;
    }

    // Behaviour
    Display()
    {
        console.log("Inside Display Function of DEmo class")
    }
}

var obj1 = new  Demo (10,11);
var obj2 = new  Demo (20,31);

console.log(obj1.No1);
console.log(obj1.No2);

console.log(obj2.No1);
console.log(obj2.No2);
