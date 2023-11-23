//🎈🎈🎈Функция которая возвращает рандомное число от 0 до (невключая)[1]

function randomFraction() {
    // Only change code below this line
    return Math.random();
    // Only change code above this line
} console.log(randomFraction())

// 🧱🧱🧱Рандомное число от 0 до 9 включистельно: Math.floor() округляет число, полученное с помощью Math.random.
function randomWholeNum() {
    return Math.floor(Math.random()*10);
} console.log(randomWholeNum())