function destroyer(...arr) {//добавили спред в аргумент
    return arr[0].filter(elem => !arr.slice(1).includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));