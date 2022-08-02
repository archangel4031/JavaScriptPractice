// Assignment 3
// Given two array, find the common elements and print the array

// Define the lists (manual definition to keep things simple)
var arrayFirst = [1, 2, 3, 4, 5, 6, 3];
var arraySecond = [3, 4, 5, 6, 7, 8];

// Declare Array to store common elements
var commonElements = [];

// Iterate through the list and find common elements
for (var i = 0; i < arrayFirst.length; i++) {
    for (var j = 0; j < arraySecond.length; j++) {
        if (arrayFirst[i] === arraySecond[j]) {
            commonElements.push(arraySecond[j]);
        }
    }
}

// Another method found on StackOverflow :)
const filteredArray = arrayFirst.filter(value => arraySecond.includes(value));

// Build string for alert() function
var displayString = "Method 1\n";
displayString = displayString + "Common Elements are\n";
displayString = displayString + commonElements.toString() + "\n";

displayString = displayString + "Method 2\n";
displayString = displayString + "Common Elements are\n";
displayString = displayString + filteredArray.toString() + "\n";

alert(displayString);