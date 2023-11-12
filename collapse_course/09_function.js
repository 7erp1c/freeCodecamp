//Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

//Passing Values to Functions with Arguments
function functionWithArgs(param1, param2){
    console.log (param1 + param2);
}
functionWithArgs(6,6);
//Return a Value from a Function with Return
function timesFive(num){
    return num * 5;
}
//Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal = 10;
function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}