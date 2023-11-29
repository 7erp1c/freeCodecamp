const reverseSeq = n => {
    let arr = [];
    for (let i = n; i >= 1; i-- ){
        arr.push(i);
    }
    return arr;
}; console.log(reverseSeq(3));

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
}