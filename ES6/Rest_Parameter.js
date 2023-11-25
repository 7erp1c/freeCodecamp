// С помощью параметра Rest, функция может принять переменное колиство параметров.
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

//
/* const sum = (...args1) => {
     let args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args1.length; i++) {
        total += args1[i];
    }
    return total;
}*/
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}; console.log(sum(4,5,3))