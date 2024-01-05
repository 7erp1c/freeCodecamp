function diffArray(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return newArr.filter(item => !arr1.includes(item) || !arr2.includes(item));
}


console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));