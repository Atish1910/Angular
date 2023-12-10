var Airthmatic = /** @class */ (function () {
    function Airthmatic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Airthmatic.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Airthmatic.prototype.Subtraction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Airthmatic;
}());
var obj1 = new Airthmatic(11, 10);
var obj2 = new Airthmatic(200, 100);
console.log(obj1.No1);
console.log(obj1.No2);
var Result = 0;
Result = obj1.Addition();
console.log(Result);
Result = obj2.Subtraction();
console.log(Result);
