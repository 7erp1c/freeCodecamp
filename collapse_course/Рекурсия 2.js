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