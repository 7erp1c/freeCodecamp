// 🎈🎈🎈Принимает число проверяет его на числа, возвращает числовое значение удаляя первые нули.
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));
//🎈🎈🎈 Используйте parseInt() в функции, что бы она возвращала двоичное значение:
function convertToInteger1(str,) {
    return parseInt(str, 2);
}
console.log(convertToInteger1("100111"));