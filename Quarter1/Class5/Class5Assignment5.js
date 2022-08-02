// Assignment 5
// For a given string, get a character from user and find its number of occurrence in the string

// Define the string, we can take an input from the user but to keep it simple, using pre-defined string
// Using Lorem Ipsum, because well, why not :)
var checkString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet augue et dui hendrerit placerat. Etiam id odio et.";

// Show the string for reference
var displayString = "String is\n";
displayString = displayString + checkString;
alert(displayString);

// Gather Input from user
var userChar = prompt("Enter a Character to count");

// Initialize the counter
var count = 0;

// Iterate through the string to count the character
for (var i = 0; i < checkString.length; i++) {
    if (userChar === checkString[i].toLowerCase()) {
        count += 1;
    }
}

// Show the result
displayString = "The Character \"" + userChar + "\" appears " + count.toString() + " times!";
alert(displayString);
