function findLongestWordLength(str) {
    let arr = str.split([' ']);//с помощью split(' ') разделим строку на массив, где пробед будет маяком для деления
    let result = 0;

   for(let i = 0; i < arr.length; i++) {

   if (arr[i].length>result){ //присваиваем итерируемое значение переменной
       result = arr[i].length;
       console.log(result);
   }}
return result;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));