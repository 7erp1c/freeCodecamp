//indexOf() проверяет есть ли элемент в масиве, если есть возвращает его порядковый индекс в массиве,
//если элемента нет, возвращает -1;

function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) == -1) {
        return false;
    }else {
        return true;
    }
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));