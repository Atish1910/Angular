var Marks = [11, 21, 51, 101, 111];
console.log("Number of elements in array are :" + Marks.length);
var i = 0;
console.log("Array traversal using For Loop");
for (var i_1 = 0; i_1 < Marks.length; i_1++) {
    console.log(Marks[i_1]);
}
console.log("Array traversal using while Loop");
i = 0;
while (i < Marks.length) {
    console.log(Marks[i]);
    i++;
}
console.log("Array traversal using Do while Loop");
i = 0;
do {
    console.log(Marks[i]);
    i++;
} while (i < Marks.length);
