//Не изменяет массив, а копирует его.
//slice(index1,index2), где index1 - начало вырезаемого эл. index2 - конец, не включа.
function forecast(arr) {
//
    return arr.slice(2,4);
}
//
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));