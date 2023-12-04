//🎈🎈🎈🎈 C помощью цикла for пробежались по массиву и отпушили элементы больше 10
/*function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
greaterThanTen([2, 12, 8, 14, 80, 0, 1]);*/

//🎈🎈🎈🎈 Удалить данные из массива содержащие elem
function filteredArray(arr, elem) {
    let newArr = [];// принимает возарат лупчикафорчика
    for (let i = 0; i<arr.length;i++){
        if (arr[i].indexOf(elem) === -1) {//Если проверяя каждый элемент, не встретим elem
            newArr.push(arr[i]);//
        }}
    // Only change code above this line
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 26));