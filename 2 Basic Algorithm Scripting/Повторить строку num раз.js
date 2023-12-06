//Дана строка str, ее надо повоторить num раз.
function repeatStringNumTimes(str, num) {
let string = '';
    if (num <= 0){
        return '';
    } for (let i = 1;i <= num;i++ ){
        string += str;
    }
        return string;
}

console.log(repeatStringNumTimes("abc", 3));