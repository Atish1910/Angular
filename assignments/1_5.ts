function Fibonacci( Limit : number) :void
{
    let iNo1 : number = 0;
    let iNo2 : number = 1;

    console.log("Fobinacci series till" +Limit);

    for (let i = 0; iNo1 <= Limit; i++) 
    {
        console.log(iNo1);
        const nextTerm :number = iNo1 + iNo2;
        iNo1 = iNo2;
        iNo2 = nextTerm;
    }

}

const userLimit : number = 1000;

Fibonacci (userLimit); 