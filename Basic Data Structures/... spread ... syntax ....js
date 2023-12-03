// спред синтаксис [...] копирует массив
function copyMachine(arr, num) {// функция copyMachine принимает массив и число
    let newArr = [];// принимает возвращаемый массив из цикла while
    while (num >= 1) {
        newArr.push([...arr]); // пушит каждую итерацию спредовый массив
        num--;//минусовая итерация
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

//Также можно заSpreadировать массивы врезав один в другой.
/*let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];*/
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment, 'is', 'fun']; // Change this line
    return sentence ;
}
console.log(spreadOut());