//shift() - не принимают значения, удаляет с начала по одному элементу
//pop() - не принимают значения, удаляет с конца по одному элемента
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line// если объявить переменную с методом pop(), shift(),
    // они примут значение
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));