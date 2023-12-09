//используем метод Array.filter(), он проверит массив и вернет все true в новом массиве
function bouncer(arr) {
    let filterW = arr.filter(a=>{
        return a;
    })
    return filterW;
}

console.log(bouncer([7, "ate", "", false, 9]));