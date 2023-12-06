//Не используя метод .endsWith() проверить окончание в строке.
function confirmEnding(str, target) {
let strFull = str.length;
let strSuf = target.length;
    return str.substring(strFull-strSuf)===target;
}

console.log(confirmEnding("Bastian", "n"));