

    function frankenSplice(arr1, arr2, n) {
        let newArr2 = [...arr2];
        console.log(newArr2);
        newArr2.splice(n, 0, ...arr1);
        return newArr2;
    }

console.log(frankenSplice([1, 2, 3], [5,4,3,2], 1));