//Нужно найти самое большое значение массива:
/*var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);*/ //apply даёт указание Math.max на массив(т.к. Math.max не видит массивы)
// Верхнее выражение можно перезаписать с помощью оператора Spread:
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);

//
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
console.log(arr1);
arr1[0] = 'koka-kola';
console.log(arr1);
let arr2;
arr2 = [...arr1]// Change this line//Оператор Spread создаёт новый массив;
arr1[0]='Machine';
console.log(arr1);
console.log(arr2);
arr1[0]='goal';
console.log(arr2);