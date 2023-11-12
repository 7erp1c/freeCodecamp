//Create a variable called myData and set it to
// equal the first value of myArray using bracket notation.
const myArray = [50, 60, 70];
const myData = myArray[0];
//Modify Array Data With Indexes:
const myArray1 = [18, 64, 99];
myArray1[0] = 45;
//Access Multi-Dimensional Arrays With Indexes:
const myArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]];
const myData = myArray2[2][1];
//Manipulate Arrays With push Method:
const myArray3 = [["John", 23], ["cat", 2]];
myArray3.push(["dog", 3])
//Manipulate Arrays With pop Method
const myArray4 = [["John", 23], ["cat", 2]];
const removedFromMyArray4 = myArray4.pop();
console.log(removedFromMyArray4);
//Manipulate Arrays With shift Method
const myArray5 = [["John", 23], ["dog", 3]];
const removedFromMyArray5 = myArray5.shift();
//Manipulate Arrays With unshift Method
const myArray6 = [["John", 23], ["dog", 3]];
myArray6.shift();
myArray6.unshift(["Paul", 35]);
//Create a shopping list in the variable myList.
// The list should be a multi-dimensional array containing several sub-arrays.
// The first element in each sub-array should contain a string with the name of the item.
// The second element should be a number representing the quantity i.e.
const myList1 =
    [
        ["Chocolate Bar", 15],
        ["Coca colla", 14],
        ["Lemonade", 13],
        ["Chocolate Bar", 12],
        ["Chocolate Bar", 11]
    ];