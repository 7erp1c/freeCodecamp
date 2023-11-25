//используйте дестриктурирование с синтаксисом Rest, что бы получить новый массив,
//за исключением первых двух элементов:
function removeFirstTwo(list) {
    const [,,...args] = list;
    return args;

}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);