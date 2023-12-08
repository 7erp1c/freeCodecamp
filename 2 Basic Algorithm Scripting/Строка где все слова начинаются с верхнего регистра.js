
function titleCase(str) {
    let arr = str.split(" ");//Получаем из строки аррэйчик
    return arr.map(a=>a[0].toUpperCase()+a.slice(1));//с помощью мапа, пробегаемся по всему масивчику,
    //даём каждому нулевому индексу Уппера, далее плюсуем слайсену которая отрезала первые буквы
    // и плюсуем Упперену и слайсену

}

console.log(titleCase("I'm a little tea pot"));