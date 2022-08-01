// Assignment 1
// This program takes a number as input from the user and tells if it is Even or Odd

// Take the Input from the user, generally we would have some sort of input validation here
var num1 = Number(prompt("Enter a number: "));

// Calculate the Mod to determine if it is EVEN or ODD
var result = num1 % 2;

// Check if it is even or odd (EVEN = 0, ODD = 1)
if(result === 0)
{
    alert("The Number is an EVEN Number");
}
else
{
    alert("The Number is an ODD Number");
}
