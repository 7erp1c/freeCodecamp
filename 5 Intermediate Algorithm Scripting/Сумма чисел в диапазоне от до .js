function sumAll(arr) {
    let numberMax = Math.max(...arr);
    let numberMin = Math.min(...arr);
    return (numberMax-numberMin+1)*(numberMax+numberMin)/2


}
console.log(sumAll([1, 4]));