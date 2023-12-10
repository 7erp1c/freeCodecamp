// Метод .match() полная противоположность методу .test() //
//  🚈синтаксик:     'string'.match(/regex/);
//  🚈синтаксик:     /regex/.test('string');
// .match() возвращает значение регулярного выражения. //
// 🚩 флаг глобального поиска g выведет все сопадаения; //
let mm =  "Hello, World!".match(/Hello/);//Hello
console.log(mm);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));


// ❤Примините метод матч для извлечения строкового кода
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex);
console.log(result);
// Извлеките вс строковые значения twinkle используя флаги:
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result1 = twinkleStar.match(starRegex);
console.log(result1);
