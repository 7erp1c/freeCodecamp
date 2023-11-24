//Напишите функцию, которая с помощью рекурсии возвращает обратный массив, если заданно число
// Объявим переменную  countdownArray, в которой будет храниться массив.

function countdown(n){

    if (n < 1) {//условие задачи
        return [];
    } else {
        let countdownArray = countdown(n - 1);//рекурсивный момент
        countdownArray.unshift(n);//unshift() добавляет полученное значение в массиив
        return countdownArray;
    }
} console.log(countdown(6))

// Даны два числа startNum, endNum, вывести массив в диапазоне от startNum до endNum. Начальное число всегда будет
// меньше или равно последниму.
function rangeOfNumbers(startNum, endNum) {
    if(startNum == endNum){//возвращаем первый индекс массива
        return [startNum];
    } else {
        var number = rangeOfNumbers(startNum, endNum - 1)//рекурсивный момент
        number.push(endNum)
        return number;
    }
}
console.log(rangeOfNumbers(1,5))