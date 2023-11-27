const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
        for (let i = 0; i < arr.length; i+=1){
            failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList)

//
const getMousePosition = (x, y) => ({
    x: x,
    y: y
}); //Функция возвращает объект содержащий два свойства:
//Можем записать  ее так:
const getMousePosition1 = (x,y)=>({x,y}) //сократили одинаковые выражения выражение х:х у:у;

