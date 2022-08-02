// Assignment 4
// Generate a Random Number and give three tries to user to guess the number

// Define Control Variables
var MIN_RANGE = 0;
var MAX_RANGE = 10;
var TRIES = 3;
var FLAG = false;

// Declare string for alert() function
var displayString = "";

// Function to generate Random NUmber in a range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Generate a random number and store it
var randNumber = getRandomInt(MIN_RANGE, MAX_RANGE + 1);

// Show number for debugging
alert(randNumber.toString());

// Declare variable for storing user response
var userGuess = 0;

for (var i = TRIES - 1; i >= 0; i--) {
    userGuess = Number(prompt("Enter your Guess"));
    if (userGuess === randNumber) {
        alert("You Guess Correct!");
        FLAG = true;
        break;
    }
    else {
        displayString = "";
        displayString = displayString + "Wrong Guess. You have " + i.toString() + " tries left";
        alert(displayString);
        FLAG = false;
    }
}

if (FLAG === true) {
    alert("You Win!");
}
else {
    alert("Better Luck Next Time!");
}