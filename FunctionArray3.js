function Demo() {
    return new Array(10, 20, 30, 40);
}
var Arr = Demo();
console.log("Elements of array are : ");
var i = 0;
for (var i_1 = 0; i_1 < Arr.length; i_1++) {
    console.log(Arr[i_1]);
}
