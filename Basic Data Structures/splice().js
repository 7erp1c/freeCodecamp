//splice() - удаляет из любой точки массива (index - откуда начинаем, index2 - сколько удаляем), возвращает значения.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];// получить 10
// Only change code below this line
let r1 = arr.shift();
let r2 = arr.splice(3);
///
///
// Only change code above this line
console.log(arr);
//как работает splice(i - откуда начинаем, i2 - сколько удаляем,i3-n -
// добавляем через запятую сколько угодно элементов, от места удаления)
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
    // Only change code above this line
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));