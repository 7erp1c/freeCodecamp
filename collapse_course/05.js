//Concatenating Strings with Plus Operator
// In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.
// Example
//
// 'My name is Alan,' + ' I concatenate.'
// Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.
//
// Example:
//
// const ourStr = "I come first. " + "I come second.";
// The string I come first. I come second. would be displayed in the console.
//
// Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.


const myStr55 = "This is the start."+"This is the end."; // Change this line
console.log(myStr55); // Output: This is the start. This is the end.

let myStr2 = "This is the first sentence. ";
myStr2 += "This is the second sentence.";

// Only change code below this line
const myName = "My name is ";
const myStr = "My name is "+ myName +"and I am well!";

// Change code below this line
//Just as we can build a string over multiple lines out of string literals,
//we can also append variables to a string using the plus equals (+=) operator.
const someAdjective = "Good day. ";
let myStr1 = "Learning to code is ";
myStr1 += someAdjective;