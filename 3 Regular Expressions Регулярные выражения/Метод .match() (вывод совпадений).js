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

// Извлеките все строковые значения twinkle используя флаги:
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result1 = twinkleStar.match(starRegex);
console.log(result1);//[ 'Twinkle', 'twinkle' ]

//Сопоставьте со всеми буквами алфавита:
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result2 = quoteSample.match(alphabetRegex);
console.log(result2);

//С определенными буквами и цифрами:
let quoteSample1 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result3 = quoteSample1.match(myRegex);
console.log(result3);//['l', 'r', 'r', '3', '4','5', '2', '6', '5', '3','s', 'r', 'l', 'i', 'i','o', 's']

//Извлеките s с помощью знака +:
let difficultSpelling = "Mississippi";
let myRegex1 = /s+/gi; // Change this line
let result4 = difficultSpelling.match(myRegex1);
console.log(result4);//[ 'ss', 'ss' ]

//
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
let result5 = chewieQuote2.match(chewieRegex2);

