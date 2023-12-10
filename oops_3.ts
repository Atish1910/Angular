class Demo
{
    //charctoricts
    No1 : number;
    No2 : number;

    // Default constructor
    constructor()
    {
        console.log("Inside of constructor class");
        this.No1 = 10;
        this.No2 = 20;
    }

    // Behaviour
    Display()
    {
        console.log("Inside Display Function of DEmo class")
    }
}

var obj = new Demo();


obj.Display();
console.log(obj.No1);
console.log(obj.No2);
