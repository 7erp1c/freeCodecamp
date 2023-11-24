// Условные операторы ( ?, : ), пример использования: (Условие) ? (Если True) : (Если False);
/*
Функция через if..else:
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
Функция через условные операторы:
function findGreater(a, b){
return a>b ? "a is greater" : "b is greater or equal";
}*/
//Use the conditional operator in the checkEqual function to check if two numbers are equal or not.
// The function should return either the string Equal or the string Not Equal.
function checkEqual(a, b) {
    return a===b ? 'Equal' : 'Not Equal';
}
console.log(checkEqual(10, 10));
//🎈🎈🎈  Если несколько условий:
function checkSign(num) {
    return (num>0) ? "positive"
        : (num===0) ? "zero"
            : "negative";
}
checkSign(10);