//В регулярных выражениях можно не использовать кавычки /Code/,
//Синтакси : /Регулярное выражение/.test(Что проверяем)
//🧑🏿____/Ratmir/___/ratmir/___/RATMIR/ - неравны_____///
// Синтакси для поиска по нескольким рег.выражениям:🚩/Ratmir|roma|Bul,ba/
//С помощью метода .test(*) проверим есть ли данное выражение в переменной testStr____//
//🚩Используя флаг i, можно игнорировать регистр, пример: /RATMIR/i  _____//
let testStr = "freeCodeCamp";               //|
let testRegex = /Code/;                     //|
console.log(testRegex.test(testStr));       //|
//Пример 2:___________________________________|
let testStr1 = "Hello, my name is Kevin.";  //|
let testRegex1 = /Kevin/;                   //|
testRegex1.test(testStr1);                  //|
//____________________________________________|

//Примините регулярное выражение myRegex, к строке  myString, с помощбю метода .test():
let myString = "Hello, World!";   //  |
let myRegex = /Hello/;          //    |
let result = myRegex.test(myString);//|
console.log(result);                //|
//__________________________________//|_________________________
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";//|
let waldoRegex = /Waldo/; // Change this line___________________|
let result1 = waldoRegex.test(waldoIsHiding);//_________________|
console.log(result1);//__________________________________//_____|
//Примините регулярное выражение fccRegex, к строке  myString2, с помощбю метода .test() |
// игнорируя регистр с помощью флага i 🚩 :                                          //  |
let myString2 = "freeCodeCamp";                                                      //  |
let fccRegex = /freeCodeCamp/i; // Change this line                                //    |
let result2 = fccRegex.test(myString2);//__________________________________________//    |