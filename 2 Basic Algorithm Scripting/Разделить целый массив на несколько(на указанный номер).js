function chunkArrayInGroups(arr, size) {
let arr_1 = [];
    let arr_2 =[];
    for(let i = 0; i < arr.length;i++) {//проходим по массиву
        arr_2.push(arr[i]);//добавляем элемнты массива arr в массив arr_2


        if (arr_2.length == size) {//создаёт 2  массива
            arr_1.push(arr_2);//
            arr_2 = [];

        }
    }
    if(arr_2.length > 0){//добавляем в arr_1 данные из arr_2
        arr_1.push(arr_2);

    }
    return arr_1;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));