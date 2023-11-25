// В JS зачастую не требуются давать имена функциям, becouse эти функции передают аргумент другой функции.
//Поэтому мы создаём встроенные функции, без имени т.к. их больше ни где не используем.
var magic = function() {
    return new Date();
};
//Используем "функцию со стрелками":
const magic1 = () => new Date();
console.log(magic1())
//Мы можем передавать в такие функции параметры:
const doubler = (item) => item * 2;
doubler(4);
console.log(doubler(55))
//Если передаётся один параметр, можно опустить скобки:
const doubler1 = item => item * 2;
console.log(doubler1(4))
//Можем передать более одного параметра:
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
console.log(multiplier(5.9,5))
// Упростим функцию которая объединяет 2 массива.
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
// Можно передать в параметры, значение по умолчанию:
const increment = (number,value = 1) => number + value;
console.log(increment(5));
console.log(increment(6,6));