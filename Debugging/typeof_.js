//Use typeof to Check the Type of a Variable ( typeof проверяет тип данных)
console.log(typeof "");//string
console.log(typeof 0);//number
console.log(typeof []);//object
console.log(typeof {});//object
//JS распознает 7 примитивных типов данных Boolean, Null, Undefined, Number, String, Symbol (new with ES6),BigInt(new with ES2020;)
// и один тип для изменяемых элементов: Object. Массивы технически являются типом объекта;
//Проверить типы переменных:
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof(seven));//number
console.log(typeof(three));//number