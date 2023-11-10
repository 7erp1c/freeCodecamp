//Find the Length of a String
// You can find the length of a String value by writing .length after the string variable or string literal.
// console.log("Alan Peter".length);
// The value 10 would be displayed in the console. Note that the space character between "Alan" and "Peter" is also counted.
// For example, if we created a variable const firstName = "Ada", we could find out how long the string Ada is by using the firstName.length property.
// Use the .length property to set lastNameLength to the number of characters in lastName.
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";
// Only change code below this line
lastNameLength = lastName.length;

//Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.
//For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].
//Example:
//const firstName = "Charles";
//const firstLetter = firstName[0];
//firstLetter would have a value of the string C.
//_________________________________________________
// Setup
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName1[0]; // Change this line


//Use Bracket Notation to Find the Nth Character in a String
//Let's try to set thirdLetterOfLastName to equal the third letter
// of the lastName variable using bracket notation.
// Setup
//____________________________________________________
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line


//Use Bracket Notation to Find the Last Character in a String
//____________________________________________________
// Setup
const lastName = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line