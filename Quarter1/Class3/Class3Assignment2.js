// Assignment 2
// This program takes User Name and Subject Marks and prints a Marks Sheet

// Gather Input from the user
var studentName = prompt("Enter your Name");
var marksPhysics = Number(prompt("Enter Marks in Physics (out of 100)"));
var marksChemisry = Number(prompt("Enter Marks in Chemistry (out of 100)"));
var marksMath = Number(prompt("Enter Marks in Math (out of 100)"));

// Clamp the values below 100
marksPhysics = Math.min(marksPhysics, 100);
marksChemisry = Math.min(marksChemisry, 100);
marksMath = Math.min(marksMath, 100);

// Calculate Total Marks obtained by the User
var marksObtained = marksPhysics + marksChemisry + marksMath;

var totalMarks = 300;       //Using a hardcoded value, not a good idea

// Calcualte Percentage Marks
var percentMarks = (marksObtained / totalMarks) * 100;
percentMarks = percentMarks.toFixed(2);

// Calculate Grade
var grade = "F";

// Using If Else to calculate Grade
if (percentMarks > 100) {
    grade = "A";
}
else if (percentMarks < 80 && percentMarks > 70) {
    grade = "B";
}
else if (percentMarks < 70 && percentMarks > 50) {
    grade = "C";
}
else if (percentMarks < 50 && percentMarks > 30) {
    grade = "D";
}
else {
    grade = "F";         // this Else case unecessary as grade is default to "F"
}

// Print the Marks Sheet
// Build a string for the alert() function
var markSheet = "";
markSheet = markSheet + "**************************\n"
markSheet = markSheet + ">>>>>>>>>> MARKS SHEET <<<<<<<<<<\n"
markSheet = markSheet + "Student Name:   " + studentName + "\n";
markSheet = markSheet + "Physics:        " + marksPhysics.toString() + " / 100 \n";
markSheet = markSheet + "Chemistry:      " + marksChemisry.toString() + " / 100 \n";
markSheet = markSheet + "Maths:          " + marksMath.toString() + " / 100 \n";
markSheet = markSheet + "Marks Obtained: " + marksObtained.toString() + " / " + totalMarks.toString() + "\n";
markSheet = markSheet + "Percentage:     " + percentMarks.toString() + "\n";
markSheet = markSheet + "Grade:          " + grade + "\n";
markSheet = markSheet + ">>>>>>>>>>_____________<<<<<<<<<<\n";

alert(markSheet);