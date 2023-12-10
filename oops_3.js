var Demo = /** @class */ (function () {
    // Behaviour
    function Demo() {
        console.log("Inside of constructor class");
        this.No1 = 10;
        this.No2 = 20;
    }
    // Behaviour
    Demo.prototype.Display = function () {
        console.log("Inside Display Function of DEmo class");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
console.log(obj.No1);
console.log(obj.No2);
