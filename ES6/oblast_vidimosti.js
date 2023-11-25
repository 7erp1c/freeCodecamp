// var объявляет переменные глобально, let  действует внутри поля, где обозначена.
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
} console.log(checkScope());
// В переменной const нельзя изменить тип данных. Но можно поменять значение.
const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line
    s[0] = 2;
    s[1] = 5; // Using s = [2, 5, 7] would be invalid
    s[2] = 7;
    // Only change code above this line
}
console.log(editInPlace());