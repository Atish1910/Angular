var Demo = /** @class */ (function () {
    function Demo() {
    }
    // Behaviour
    Demo.prototype.Display = function () {
        console.log("Inside Display Function of DEmo class");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
