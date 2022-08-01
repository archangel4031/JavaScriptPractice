// Assignment 1
// Take a number from user and print Multiplication Table

// Take the Input from the user, generally we would have some sort of input validation here
var numUser = Number(prompt("Enter a number to generate table: "));

// Build a table string for alert() function
var tableString = "";

tableString = tableString + "before loop\n";
tableString = tableString + "=================\n";
for (var i = 1; i <= 10; i++) {
    tableString = tableString + numUser.toString() + " x " + i.toString() + " = " + (numUser * i).toString() + "\n";
}
tableString = tableString + "=================\n";
tableString = tableString + "after loop\n";

alert(tableString);
