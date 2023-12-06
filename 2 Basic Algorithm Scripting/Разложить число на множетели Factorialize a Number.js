//написать функцию по нахождению факториала числа
function factorialize(num) {
    let fact = 1;
    console.log(fact)
    if (num===0){
        return 1;
    }
    for(let i= 2;i<=num;i++){//т.к. факториал 0 = 1; начинаем итерацию с 2;
        console.log(i);
        fact *= i;

    }
        return fact;

}

console.log(factorialize(5));