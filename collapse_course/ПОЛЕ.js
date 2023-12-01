/*const reverseSeq = n => {
    let arr = [];
    for (let i = n; i >= 1; i-- ){
        arr.push(i);
    }
    return arr;
}; console.log(reverseSeq(3));*/
/*
let alphabet = "abcde";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {// много
    console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {//мало
    console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {//good
    console.log(alphabet[k]);
}*/

/*function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];

    for (let i = 0; i < m; i++) {
        let row=[];// Adds the m-th row into newArray

        for (let j = 0; j > n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(j)
        }

        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);*/

const areaOrPerimeter = function() {
    let l = 3;
    let w = 5;

    if (l !== w) {
        return l + w + l + w;// Return your answer
    } else {
        return l * w;
    }
}
    console.log(areaOrPerimeter());