function Percentage(Marks, Outof) {
    var Result = 0;
    Result = ((Marks / Outof) * 200);
    return Result;
}
var Ans = 0;
Ans = Percentage(67, 200);
console.log("Percentage is " + Ans);
