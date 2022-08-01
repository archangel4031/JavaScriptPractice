// Assignment 2
// Generate 100 random numbers between 10 and 90 and store them in a sepearate array
// a. Find their sum and average
// b. Find maximum number
// c. Find minimum number
// d. Check how many numbers are greater than 40 (using continue command)

// Define Control Variables
var MIN_RANGE = 10;
var MAX_RANGE = 90;
var ARRAY_LENGTH = 100;

// String for alert() function
displayString = "";

// Function to generate Random NUmber in a range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Declare an empty array to store random numbers
var randomArray = [];

// Generate Random Number and store in the Array
for (var i = 0; i < ARRAY_LENGTH; i++) {
    randomArray.push(getRandomInt(MIN_RANGE, MAX_RANGE));
}

// Show Random Array
alert("Random array is: " + randomArray.toString());

// *********************************************************
// Task 1: Calculate Sum and Avarages

// Declare variables to store values
var sum = 0;
var avg = 0;

// Calculate Sum
for (var i = 0; i < randomArray.length; i++) {
    sum += Number(randomArray[i]);
}

// Calculate Average
avg = sum / randomArray.length;

// Show the values
displayString = "Task 1\n\n";
displayString = displayString + "Sum: " + sum.toString() + "\n";
displayString = displayString + "Average: " + avg.toString() + "\n";

alert(displayString);

// *********************************************************
// Task 2: Find Max Number

// Easy Way to find Max Value :)
var maxValE = Math.max(...randomArray);

// Assignment way to find Max Value

// Assume first element is Max and use loop to update value
var maxValH = randomArray[0];

for (i = 0; i < randomArray.length; i++) {
    if (randomArray[i] > maxValH) {
        maxValH = randomArray[i];
    }
}

// Build Display String for alert() function
displayString = "Task 2\n\n";
displayString = displayString + "[EASY] Max Value in Array is: " + maxValE.toString() + "\n";
displayString = displayString + "[HARD] Max Value in Array is: " + maxValH.toString() + "\n";

alert(displayString);

// *********************************************************
// Task 3: Find Min Number

// Easy Way to find Min Value :)
var minValE = Math.min(...randomArray);

// Assignment way to find Min Value

// Assume first element is Min and use loop to update value
var minValH = randomArray[0];

for (i = 0; i < randomArray.length; i++) {
    if (randomArray[i] < minValH) {
        minValH = randomArray[i];
    }
}

// Build Display String for alert() function
displayString = "Task 3\n\n";
displayString = displayString + "[EASY] Min Value in Array is: " + minValE.toString() + "\n";
displayString = displayString + "[HARD] Min Value in Array is: " + minValH.toString() + "\n";

alert(displayString);

// *********************************************************
// Task 4: Find number greater that 40

// Declare an empty array to store results
var greaterThan40 = [];

// Iterate through the list and store the result
for (i = 0; i < randomArray.length; i++) {
    if (randomArray[i] < 40) {
        continue
    }
    greaterThan40.push(randomArray[i]);
}

// Build Display String for alert() function
displayString = "Task 4\n\n";
displayString = displayString + "Elements greater than 40 are:\n" + greaterThan40.toString();

alert(displayString);