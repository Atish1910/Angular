function Display(No :number, value ? :number)
{
    console.log(No);
    if(value != undefined)
    {
        console.log(value);
    }
}


Display(11,21);
Display(11);