//🎈🎈🎈 Вывести массив [5.4.3.2.1.0] с помощью цикла While
const myArray = [];
let i = 5;
while(i > -1){
    myArray.push(i);
    i--;
} console.log(myArray);

//🎈🎈🎈 for
const myArray1 = [];
for (let i = 1; i < 6 ; i++){
    myArray1.push(i);
} console.log(myArray1);
//🎍🎋🎄Вывести массив нечетных числе от 1 до 9 с помощью цикла For:
const myArray3 = [];
for(let i = 1;i<10; i+=2) {
    myArray3.push(i);
} console.log(myArray3);
//🎆🎆🎆🎆 Вывести массив нечетных чисел от 9 до 1 с помощью цикла For:
const myArray4= [];
for(let i = 9; i>0;i-=2){
    myArray4.push(i);
} console.log(myArray4);
//🎇🎇🎇 Сложить элементы массива с помощью цикла For:
const myArr5 = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0;i<myArr5.length; i++){
    total += myArr5[i];
} console.log(total);
// многомерные массивы:
function multiplyAll(arr) {
    let product = 1;
    for(let i = 0;i < arr.length;i++){
        for(let j = 0; j < arr[i].length;j++){
            product *= arr[i][j];
        }
    }
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

