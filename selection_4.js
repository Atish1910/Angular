function DisplayTime(Division) {
    switch (Division) {
        case "A":
            {
                console.log("Your Exam is at 7AM");
                break;
            }
        case "B":
            {
                console.log("Your Exam is at 8AM");
                break;
            }
        case "C":
            {
                console.log("Your Exam is at 9AM");
                break;
            }
        case "D":
            {
                console.log("Your Exam is at 10AM");
                break;
            }
        default:
            {
                console.log("Worng input, your input sholud be in A, B, C, D");
            }
    }
}
var Value = "C";
DisplayTime(Value);
