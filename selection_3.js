function DisplayTime(Division) {
    if (Division == "A") {
        console.log("Your Exam is at 7");
    }
    else if (Division == "B") {
        console.log("Your Exam is at 8");
    }
    else if (Division == "C") {
        console.log("Your Exam is at 9");
    }
    else if (Division == "D") {
        console.log("Your Exam is at 10");
    }
    else {
        console.log("Wrong input, it should be in A,B,C,D");
    }
}
var Value = "C";
DisplayTime(Value);
